
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.js";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById("root"));