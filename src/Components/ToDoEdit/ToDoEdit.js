import { useRef } from "react";
import style from "./ToDoEdit.module.css";
const ToDoEdit = ({ inputValue, onSave }) => {
  const inputRef = useRef(null);
  return (
    <div className={style.editTodo}>
      <div className={style.editContainer}>
        <input type="text" placeholder={inputValue} ref={inputRef} />
        <div className={style.editBtns}>
          <button onClick={onSave} data-input={inputRef}>
            Save
          </button>
          <button>Cansel</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoEdit;
