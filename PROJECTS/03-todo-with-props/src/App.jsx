import { useState } from "react";
import TodoCreate from "./Components/todoCreate";
import TodoList from "./Components/TodoList";
import "./css/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const createMyNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodoByID = (removeID) => {
    setTodos([...todos.filter((todo) => todo.id !== removeID)]);
  };

  const editAndUpdateTodo = (editedTodoInfos) => {
    const updatedTodoList = todos.map((todo) => {
      if (todo.id !== editedTodoInfos.id) {
        return todo;
      }
      return editedTodoInfos;
    });
    setTodos([...updatedTodoList]);
  };

  console.log(todos);

  return (
    <div className="container">
      <h1 className="container-title">TODO-APP WITH PROPS</h1>
      <TodoCreate createMyNewTodo={createMyNewTodo} />
      <TodoList
        todos={todos}
        deleteTodoByID={deleteTodoByID}
        editAndUpdateTodo={editAndUpdateTodo}
      />
    </div>
  );
}

export default App;
