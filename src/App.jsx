// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import EntryForm from "./components/EntryForm";
import Todo from "./components/Todo";
import nextId from "react-id-generator";
import { useEffect, useState } from "react";

// const intitialState = [
//   {
//     id: nextId(),
//     title: "hello",
//     completed: false,
//   },
// ];

function newFunction() {
  return () => {
    let localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  };
}

function App() {
  let [todos, setTodos] = useState(newFunction());
  let [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTodo === "" || newTodo.replaceAll(' ', '').length === 0) return;
    setTodos([
      ...todos,
      {
        id: nextId(),
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const inputHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const checkedHandler = (id, checked) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      });
    });
  };

  const deleteHandler = (id) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main-container">
      <img src="./background2.jpg" alt="landscape"></img>
      <div className="todo-container">
        <h2 className="text-center ">Todo List</h2>
        <EntryForm
          submitHandler={submitHandler}
          newTodo={newTodo}
          inputHandler={inputHandler}
        />
        <Todo
          todos={todos}
          checkedHandler={checkedHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
}

export default App;


