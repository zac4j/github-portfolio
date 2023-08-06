import React, { Component } from "react";
import logo from "../../GitHub-Mark-Light-64px.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 64px;
  pointer-events: none;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo src={logo} alt="logo" className="App-logo" />
        <h1>Github Portfolio</h1>
      </HeaderWrapper>
    );
  }
}

export default Header;
