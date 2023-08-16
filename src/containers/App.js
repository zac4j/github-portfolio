import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Tickets from "./Tickets";
import Header from "../components/Header/Header";
import Board from "./Board";
import Profile from "./Profile";

const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

class App extends Component {
  render() {
    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" },
    ];

    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          {/* <Profile /> */}
          <h2>GitHub project management</h2>
          <Board lanes={lanes} dataSource={"./data.json"} />
          <Tickets dataSource={"./data.json"} />
        </AppWrapper>
      </>
    );
  }
}

export default App;
