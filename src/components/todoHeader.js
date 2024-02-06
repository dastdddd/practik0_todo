import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSelectValue } from "../redux/slices/todoSlice";

const TodoHeader = () => {
  const dispatch = useDispatch();
  const { selectValue, todos1 } = useSelector((state) => state.todo);

  return (
    <div>
      <h1>Todo List</h1>
      <h3>Count list: {todos1.length}</h3>
      <select
        onChange={(e) => dispatch(onSelectValue(e.target.value))}
        value={selectValue}// value-состояние жазылат
        name=""
        id=""
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
      </select>
    </div>
  );
};

export default TodoHeader;
