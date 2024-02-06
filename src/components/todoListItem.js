import React from "react";
import { useDispatch } from "react-redux";
import { changeCompleted, deleteItem } from "../redux/slices/todoSlice";

const TodoListItem = ({ title, complete, id, index }) => {
  const dispatch = useDispatch();
  

  return (
    <div>
      <span style={{ textDecoration: complete ? "line-through" : "none" }}>
        {index + 1} {title}
      </span>
      <input
        type="checkbox"
        defaultChecked={complete}
        onClick={() => dispatch(changeCompleted(id))}
      />
      <button disabled={!complete} onClick={() => dispatch(deleteItem(id))}>
        delete
      </button>
    </div>
  );
};

export default TodoListItem;
