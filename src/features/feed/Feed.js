import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { Link, useSearchParams } from "react-router-dom";

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PaginationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PaginationLink = styled(Link)`
  padding: 1%;
  background: lightBlue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

// https://github.com/PacktPublishing/React-Projects/tree/ch4

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let params = useSearchParams();
  let pg = params.page ? parseInt(params.page) : 1;
  const [page, setPage] = useState(pg);

  useEffect(() => {
    fetch(
      `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow${
        page ? `&page=${page}` : ""
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [page]);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error}</Alert>;
  }

  return (
    <>
      <FeedWrapper>
        {data.items.map((item) => (
          <CardLink
            key={item.question_id}
            to={`/questions/${item.question_id}`}
          >
            <Card data={item} />
          </CardLink>
        ))}
        <PaginationBar>
          {page > 1 && (
            <PaginationLink to={`/feed?page=${page - 1}`}>
              <span
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Previous
              </span>
            </PaginationLink>
          )}
          {data.has_more && (
            <PaginationLink to={`/feed?page=${page + 1}`}>
              <span
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Next
              </span>
            </PaginationLink>
          )}
        </PaginationBar>
      </FeedWrapper>
    </>
  );
}
