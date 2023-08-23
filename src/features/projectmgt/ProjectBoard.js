import React, { Component } from "react";
import Tickets from "./Tickets";
import Board from "./Board";

class ProjectBoard extends Component {
  render() {
    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" },
    ];

    return (
      <>
        <Board lanes={lanes} dataSource={"./data.json"} />
        <Tickets dataSource={"./data.json"} />
      </>
    );
  }
}

export default ProjectBoard;
