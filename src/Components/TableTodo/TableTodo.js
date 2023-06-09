import styles from "./TabelTodo.module.css";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const TabelTodo = (props) => {
  return (
    <div>
      <li class={styles.todo}>
        <p class={styles.todoTitle}>{props.todo.title}</p>
        <div class={styles.todoInfo}>
          <p class={styles.todoCreatedAt}>{props.todo.createdAt}</p>
          <button class={styles.todoEdit} data-id={props.todo.id}>
            <FaEdit />
          </button>
          <button class={styles.todoCheck} data-id={props.todo.id}>
            <FaCheck />
          </button>
          <button class={styles.todoRemove} data-id={props.todo.id}>
            <FaTrashAlt />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TabelTodo;
