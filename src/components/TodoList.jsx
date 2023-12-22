import React from "react";

export default function TodoList({ todo, checkedHandler, deleteHandler }) {
  const { id, title, completed } = todo;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => checkedHandler(id, e.target.checked)}
      />
      {
        completed === false ? (
            <p>{title}</p>
        ) : (
            <p>
            <s>{title}</s>
            </p>
        )
      }
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </li>
  );
}
