import React from "react";
import ReactDOM from "react-dom";
import { Snake } from './snake';
import style from "./style.scss";
const App = () => <Snake />
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
