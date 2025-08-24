import { MdDeleteOutline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodoWithID, editTodo } from "../redux/TodoSlice";
import { useState } from "react";

function TodoItem({ todoProps }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodoWithID(todoProps.id));
  };

  const [editable, setEditable] = useState(false);
  const [myEditedTodoItem, setMyEditedTodoItem] = useState(todoProps.content);

  const changeTodoItemContent = () => {
    const editedTodoInfos = {
      id: todoProps.id,
      content: myEditedTodoItem,
    };
    dispatch(editTodo(editedTodoInfos));
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
          todoProps.content
        )}
      </div>
      <div className="todoItem-iconButtons">
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
        {!editable && (
          <MdDeleteOutline
            onClick={handleDelete}
            className="todoItem-iconButtons delete"
          />
        )}
      </div>
    </div>
  );
}

export default TodoItem;
