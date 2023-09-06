import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../features/feed/Feed";
import Profile from "../features/profile/Profile";
import ProjectBoard from "../features/projectmgt/ProjectBoard";
import Question from "../features/feed/Question";

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
          <Header title={"GitHub"} />
          <Router>
            <Routes>
              <Route path="/feed" Component={Feed} />
              <Route path="/questions/:id" Component={Question} />
              <Route path="/profile" Component={Profile} />
              <Route path="/board" Component={ProjectBoard} />
            </Routes>
          </Router>
        </AppWrapper>
      </>
    );
  }
}

export default App;
