import React, { useState } from "react";

function TodoCreate({ createMyNewTodo }) {
  const [newTodoInfo, setNewTodoInfo] = useState("");

  const todoCreator = () => {
    if (!newTodoInfo) return;
    const sendNewTodo = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodoInfo,
    };
    createMyNewTodo(sendNewTodo);
    clearInput();
  };

  const clearInput = () => {
    setNewTodoInfo("");
  };

  return (
    <div className="todoCreate-container">
      <input
        type="text"
        className="todoCreate-input"
        value={newTodoInfo}
        onChange={(e) => setNewTodoInfo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && todoCreator()}
      />
      <button className="todoCreate-button" onClick={todoCreator}>
        Add To-Do
      </button>
    </div>
  );
}

export default TodoCreate;
