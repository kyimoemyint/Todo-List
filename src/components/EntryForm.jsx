import React, { useState } from "react";
import "./entryform.css";

export default function EntryForm({ submitHandler, newTodo, inputHandler }) {
  return (
    <form className="form-container" onClick={submitHandler}>
      <input
        type="text"
        placeholder="Add Todo"
        value={newTodo}
        onChange={inputHandler}
      ></input>
      <button>Add</button>
    </form>
  );
}
