import React, { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      addTodos(todo);
      setTodo("");
    }
  };
  return (
    <div className="todo-form-comp">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-form-input"
          name="todo"
          type="text"
          value={todo}
          placeholder="Enter The Text..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <button className="todo-form-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
