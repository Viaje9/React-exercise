import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board"


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const App = ReactDOM.render(<Game />, document.getElementById("root"));

export default hot(App);
