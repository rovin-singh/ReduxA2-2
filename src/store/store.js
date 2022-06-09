import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";
import todoReducer from "./todoReducer/todoReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  todo: todoReducer
});

export const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware())
);
