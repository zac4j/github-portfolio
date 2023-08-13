import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "./Profile";
import Header from "../components/Header/Header";
import Board from "./Board";

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
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board />
        </AppWrapper>
      </>
    );
  }
}

export default App;
