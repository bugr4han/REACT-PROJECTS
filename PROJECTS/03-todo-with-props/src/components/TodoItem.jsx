import { MdDeleteOutline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

function TodoItem({ todo, deleteTodoByID, editAndUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [myEditedTodoItem, setMyEditedTodoItem] = useState(content);
  const deleteTodo = () => {
    deleteTodoByID(id);
  };

  const changeTodoItemContent = () => {
    const editedTodoInfos = {
      id: id,
      content: myEditedTodoItem,
    };
    editAndUpdateTodo(editedTodoInfos);
    setEditable(false);
  };

  return (
    <div className="todoItem-container">
      <div className="todoItem-contentPlace">
        {editable ? (
          <input
            type="text"
            className="edit-input"
            value={myEditedTodoItem}
            onChange={(e) => setMyEditedTodoItem(e.target.value)}
          ></input>
        ) : (
          content
        )}
      </div>
      <div className="todoItem-iconButtons">
        <MdDeleteOutline
          className="todoItem-iconButtons delete"
          onClick={deleteTodo}
        />
        {editable ? (
          <FaRegCheckCircle
            className="todoItem-iconButtons check"
            onClick={changeTodoItemContent}
          />
        ) : (
          <BiSolidEdit
            className="todoItem-iconButtons edit"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
}

export default TodoItem;
