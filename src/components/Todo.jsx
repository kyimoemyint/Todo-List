import React from "react";
import "./todo.css";
import TodoList from "./TodoList";

export default function Todo({ todos, checkedHandler, deleteHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          checkedHandler={checkedHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </ul>
  );
}
