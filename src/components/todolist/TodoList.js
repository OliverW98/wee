import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "../../todoStyle.css";

import todosData from "../../todosData";

function TodoList() {
  const [todoItems, setTodoItems] = useState(todosData);

  function handleChange(id) {
    const tempTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodoItems(tempTodoItems);
    // return {
    //   tempTodoItems,
    // };
  }

  const todoItemsList = todosData.map((item) => (
    <TodoItem key={item.id} item={item} handleChange={handleChange} />
  ));

  return <div className="todo-list">{todoItemsList}</div>;
}

export default TodoList;
