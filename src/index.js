/**
 * Created by jagme on 9/2/2018.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
    <TodoList/>
    </div>,
    destination
);