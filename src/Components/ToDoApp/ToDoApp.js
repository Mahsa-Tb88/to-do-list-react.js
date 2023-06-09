import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const addToDoHandler = (input) => {
    const newTodo = {
      title: input.trim().slice(0, 20),
      id: new Date().getTime(),
      completed: "completed",
      createdAt: new Date().toLocaleDateString("en-US"),
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <ToDoForm addToDoHandler={addToDoHandler} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDoApp;
