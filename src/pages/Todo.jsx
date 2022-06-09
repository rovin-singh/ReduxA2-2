import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Todo = () => {
  let idObj = useParams();
  let id = Number(idObj.id);
  const todos = useSelector((state) => state.todo.todos);
  // console.log(todos[Number(id)].value);
  if (todos.length > 0) {
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <p> {todos[Number(id)].value}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Todo;
