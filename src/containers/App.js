import React from "react";
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

// https://reactrouter.com/en/6.15.0/upgrading/v5

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header title={"GitHub"} />
        <Router>
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/questions/:id" element={<Question />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/board" element={<ProjectBoard />} />
          </Routes>
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;
