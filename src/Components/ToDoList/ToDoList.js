import { useState } from "react";
import TabelTodo from "../TableTodo/TableTodo";
import ToDoForm from "../ToDoForm/ToDoForm";
const ToDoList = ({ todos, deleteHandler, cheakHandler, onUpdateTodo }) => {
  const [edit, setEdit] = useState({
    title: "",
    id: null,
    completed: "completed",
    creeatedAt: new Date().toLocaleDateString("en-US"),
  });
  const editTodo = (input) => {
    onUpdateTodo(edit.id, input);
    setEdit({
      title: "",
      id: null,
      completed: "completed",
      creeatedAt: new Date().toLocaleDateString("en-US"),
    });
  };
  const renderTodo = () => {
    if (todos.length == 0) return <p>There is no text</p>;

    return todos.map((todo) => {
      return (
        <TabelTodo
          todo={todo}
          key={todo.id}
          onRemove={() => deleteHandler(todo.id)}
          onCheck={() => cheakHandler(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? (
        <ToDoForm addToDoHandler={editTodo} edit={edit} />
      ) : (
        renderTodo()
      )}
    </div>
  );
};

export default ToDoList;
