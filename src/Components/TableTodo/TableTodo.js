import styles from "./TabelTodo.module.css";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const TabelTodo = ({ todo, onRemove, onCheck, onEdit }) => {
  return (
    <div>
      <div>
        <li className={styles.todo}>
          <p className={styles.todoTitle}>{todo.title}</p>
          <div className={styles.todoInfo}>
            <p className={styles.todoCreatedAt}>{todo.createdAt}</p>
            <button
              className={styles.todoEdit}
              data-id={todo.id}
              onClick={onEdit}
            >
              <FaEdit />
            </button>
            <button
              className={styles.todoCheck}
              data-id={todo.id}
              onClick={onCheck}
            >
              {todo.completed == "completed" ? <FaCheck /> : ""}
            </button>
            <button
              className={styles.todoRemove}
              data-id={todo.id}
              onClick={onRemove}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default TabelTodo;
