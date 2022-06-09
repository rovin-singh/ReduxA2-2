import { ADD_TODO, UPDATE_TODO } from "./action.types";
export const add = (payload) => ({ type: ADD_TODO, payload });
export const UPDATED = (id) => ({ type: UPDATE_TODO, payload: id });
