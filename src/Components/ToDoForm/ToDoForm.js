import { useState } from "react";
import styles from "./ToDoForm.module.css";
import { FaPlus } from "react-icons/fa";
const ToDoForm = (props) => {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.addToDoHandler(input);
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
        />
        <button type="submit" className={styles.todoButton}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
