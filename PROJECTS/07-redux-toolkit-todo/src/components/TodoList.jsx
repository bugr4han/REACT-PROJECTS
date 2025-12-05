import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoItems } = useSelector((state) => state.todosFromStore);

  return (
    <div className="todoList-container">
      {todoItems &&
        todoItems.map((todo) => {
          return <TodoItem key={todo.id} todoProps={todo} />;
        })}
    </div>
  );
}

export default TodoList;
