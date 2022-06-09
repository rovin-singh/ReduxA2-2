import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoApp from "./pages/TodoApp";
import Todo from "./pages/Todo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoApp />}></Route>
        <Route path="/todo/:id" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}
export default App;
