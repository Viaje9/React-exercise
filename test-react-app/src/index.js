import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Game from "./components/game"


// ========================================

const App = ReactDOM.render(<Game />, document.getElementById("root"));

export default hot(App);
