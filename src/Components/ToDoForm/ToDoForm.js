import { useEffect, useRef, useState } from "react";
import styles from "./ToDoForm.module.css";
import { FaPlus } from "react-icons/fa";
const ToDoForm = ({ addToDoHandler, edit }) => {
  const [input, setInput] = useState(edit ? edit.title : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addToDoHandler(input);
    setInput("");
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler} className={styles.formTodo}>
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          className={styles.todoInput}
          placeholder={edit ? edit.title : "add to do"}
          ref={inputRef}
        />
        <button type="submit" className={styles.todoButton}>
          {edit ? "update" : <FaPlus />}
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
