import React from "react";
import styled from "styled-components";

const InnerLink = styled.a`
  color: #61dafb;
`;

export default function Link({ url, title }) {
  return (
    <InnerLink className="App-link" href={url} target="reactjs.org">
      {title}
    </InnerLink>
  );
}
