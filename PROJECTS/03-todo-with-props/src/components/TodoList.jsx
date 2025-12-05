import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodoByID, editAndUpdateTodo }) {
  return (
    <div className="todoList-container">
      {todos &&
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoByID={deleteTodoByID}
              editAndUpdateTodo={editAndUpdateTodo}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
