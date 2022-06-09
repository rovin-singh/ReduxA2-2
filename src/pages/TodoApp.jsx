import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, UPDATED } from "../store/todoReducer/actions";
const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const addNew = () => {
    let value = ref.current.value;
    dispatch(add({ value: value, isCompleted: false }));
    ref.current.value = null;
  };
  return (
    <div style={{ margin: "20px" }}>
      <input ref={ref} type="text" placeholder="Type here.." />
      <button onClick={addNew}>Add</button>
      <div style={{ margin: "20px" }}>
        <div style={{ margin: "auto", padding: "20px" }}>
          <table style={{ padding: "10px", margin: "auto" }}>
            <thead>
              <tr>
                <th>Value</th>
                <th>Status</th>
                <th>Know More</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((data) => (
                <tr key={data.id}>
                  <td>{data.value}</td>
                  <td>
                    <button onClick={() => dispatch(UPDATED(data.id))}>
                      {data.isCompleted ? "Done" : "Not Done"}
                    </button>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/todo/${data.id}`}>Know More</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
