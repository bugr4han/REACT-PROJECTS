import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./css/App.css";
import "./css/TodoCreate.css";
import "./css/TodoItem.css";
import "./css/TodoList.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="container-title-1">TO-DO APP</h1>
        <h1 className="container-title-2">WITH REDUX-TOOLKIT</h1>

        <TodoCreate />
        <TodoList />
      </div>
    </>
  );
}

export default App;
