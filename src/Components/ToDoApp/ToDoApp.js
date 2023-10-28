import { useEffect, useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import styles from "./ToDoApp.module.css";
import ToDoState from "../TodoState/ToDoState";
import ToDoEdit from "../ToDoEdit/ToDoEdit";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodo, setFiledteredTodo] = useState([]);
  const [status, setStatus] = useState("All");
  useEffect(() => {
    onFilterTodo(status);
  }, [todos, status]);
  const selectHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
    onFilterTodo(e.target.value);
  };
  const onFilterTodo = (status) => {
    console.log("continue", status);
    if (status == "All") {
      console.log("All");
      setFiledteredTodo(todos);
    } else if (status == "completed") {
      console.log("completed");
      const newTodos = todos.filter((todo) => todo.completed == status);
      setFiledteredTodo(newTodos);
    } else if (status == "unCompleted") {
      console.log("unCompleted");
      const newTodos = todos.filter((todo) => todo.completed == status);
      setFiledteredTodo(newTodos);
    }
  };
  const addTodo = (input) => {
    const newTodo = {
      title: input.trim().slice(0, 20),
      id: new Date().getTime(),
      completed: status == "unCompleted" ? "unCompleted" : "completed",
      createdAt: new Date().toLocaleDateString("en-US"),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (todoId) => {
    const filterTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filterTodos);
  };
  const cheakHandler = (todoId) => {
    const index = todos.findIndex((todo) => todo.id == todoId);
    const todo = { ...todos[index] };
    todo.completed =
      todo.completed == "completed" ? "unCompleted" : "completed";
    const newTodos = [...todos];
    newTodos[index] = todo;

    setTodos(newTodos);
  };

  const onUpdateTodo = (id, input) => {
    console.log(id);
    console.log(input);
    const index = todos.findIndex((todo) => todo.id == id);
    const todo = { ...todos[index] };
    todo.title = input;
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoHeader}>
        <ToDoForm addToDoHandler={addTodo} />
        <ToDoState onSelect={selectHandler} />
      </div>

      <ToDoList
        todos={filteredTodo}
        deleteHandler={deleteHandler}
        cheakHandler={cheakHandler}
        onUpdateTodo={onUpdateTodo}
      />
    </div>
  );
};

export default ToDoApp;
