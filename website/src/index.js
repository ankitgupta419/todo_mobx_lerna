import React from "react";
import { render } from "react-dom";
import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
var aaBeta = require("aa-beta");
const store = new TodoListModel();
render(
  <div>
    <TodoList store={store} />
    <div>aaBeta</div>
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
