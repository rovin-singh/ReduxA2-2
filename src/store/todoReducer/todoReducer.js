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
      return state;
    }
    default:
      return state;
  }
}

export default todoReducer;
