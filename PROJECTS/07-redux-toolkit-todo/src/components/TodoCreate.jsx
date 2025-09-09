import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

function TodoCreate() {
  const [newInputTodo, setNewInputTodo] = useState("");

  const dispatch = useDispatch();
  const handleCreateTODO = () => {
    if (newInputTodo.trim().length == 0) {
      return;
    }

    const payload = {
      id: Date.now().toString(),
      content: newInputTodo,
    };

    dispatch(addTodo(payload));
    setNewInputTodo("");
  };

  return (
    <div className="todoCreate-container">
      <input
        type="text"
        className="todoCreate-input"
        value={newInputTodo}
        onChange={(e) => setNewInputTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCreateTODO()}
      />
      <button onClick={handleCreateTODO} className="todoCreate-button">
        Add To-Do
      </button>
    </div>
  );
}

export default TodoCreate;
