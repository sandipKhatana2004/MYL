import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list-comp">
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo" key={index}>
              <li className="todo-li">{todo}</li>
              <MdDeleteForever
                className="todo-delete-button"
                onClick={() => deleteTodo(todo)}
                style={{ color: "black" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <div className="todo-list-empty">
          <h2 className="todo-tasknotfound">No Task Found</h2>
        </div>
      )}
    </div>
  );
};

export default TodoList;
