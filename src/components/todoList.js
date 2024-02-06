import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./todoListItem";

const TodoList = () => {
  const { todos1, selectValue } = useSelector((state) => state.todo);

  //const activeTodosDone = todos1 && todos1.filter(item=> item.complete === true)
  //const activeTodosNotDone = todos1 && todos1.filter(item=> item.complete === false)
  //const filterTodos = [...activeTodosNotDone, activeTodosDone]

  useEffect(() => {
    localStorage.setItem('todos-toolkit', JSON.stringify(todos1));
  }, [todos1]);

  return (
    <div>
      {todos1
        .filter((item) => {
          if (selectValue === "all") {
            return true;
          } else if (selectValue === "done") {
            return item.complete;
          } else if (selectValue === "not-done") {
            return !item.complete;
          }
        })
        .map((item, index) => (
          <TodoListItem index={index} key={item.id} {...item} />
        ))}
    </div>
  );
};

export default TodoList;
