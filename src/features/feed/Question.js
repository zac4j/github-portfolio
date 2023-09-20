import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

export default function Question() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchAPI({ id }) {
    try {
      const data = await fetch(`${ROOT_API}questions/${id}?site=stackoverflow`);
      const dataJSON = await data.json();

      if (dataJSON) {
        setData(dataJSON);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  let id = useParams().id;

  fetchAPI(id);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error}</Alert>;
  }

  return (
    <>
      <QuestionWrapper>
        <Card key={data.items[0].question_id} data={data.items[0]} />
      </QuestionWrapper>
    </>
  );
}

