import React, { Component } from "react";
import styled from "styled-components";
import Lane from "../components/Lane/Lane";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Board extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const tickets = await fetch("./data.json");
      const ticketsJson = await tickets.json();

      if (ticketsJson) {
        this.setState({
          data: ticketsJson,
          loading: false,
        });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" },
    ];

    return (
      <BoardWrapper>
        {lanes.map((lane) => (
          <Lane key={lane.id} title={lane.title} ticket={this.state.data[0]} />
        ))}
        ;
      </BoardWrapper>
    );
  }
}

export default Board;
