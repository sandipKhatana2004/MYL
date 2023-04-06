import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./todo.css";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title"> Make Todo List</h1>
      <div className="todo-add">
        <input
          className="todo-input"
          name="todo"
          type="text"
          value={todo}
          placeholder="Enter The Text..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <button className="todo-button" onClick={addTodos}>
          Add
        </button>
      </div>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li className="todo-li" key={index}>
                {todo}
              </li>
              <MdDeleteForever
                className="todo-delete-button"
                onClick={() => deleteTodo(todo)}
                style={{ color: "black" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <h2 className="todo-tasknotfound">No Task Found</h2>
        </div>
      )}
    </div>
  );
};

export default ToDo;
