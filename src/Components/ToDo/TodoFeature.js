import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoFeature = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo !== Text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <TodoForm className="todo-form-main" addTodo={addTodo} />
      <TodoList
        className="todo-list-main"
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoFeature;
