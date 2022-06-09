import { ADD_TODO, UPDATE_TODO } from "./action.types";
function todoReducer(state = { todos: [] }, { type, payload }) {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { ...payload, id: state.todos.length }]
      };
    }
    case UPDATE_TODO: {
      let newTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = true;
        } else {
          console.log(todo.id, payload);
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
}

export default todoReducer;
