import React, { useState } from "react";
import HeroSection from "../HeroSection";
import TodoItem from "./TodoItem";
import "../../todoStyle.css";
import todosData from "../../todosData";
import { useSpring, animated } from "react-spring";

function TodoList() {
  const [todoItems, setTodoItems] = useState(todosData);

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  function handleChange(id) {
    const tempTodoItems = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodoItems(tempTodoItems);
  }

  const todoItemsList = todosData.map((item) => (
    <TodoItem key={item.id} item={item} handleChange={handleChange} />
  ));

  return (
    <animated.div style={props}>
      <HeroSection
        title="TodoList"
        subtitle="A todo list i made by following a course."
      />

      <div className="todo-list">{todoItemsList}</div>
    </animated.div>
  );
}

export default TodoList;
