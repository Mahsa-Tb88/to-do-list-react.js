import style from "./TodoSatet.module.css";
const ToDoState = ({ onSelect, status }) => {
  return (
    <div>
      <select onChange={onSelect} value={status} className={style.todoSelect}>
        <option>All</option>
        <option>completed</option>
        <option>unCompleted</option>
      </select>
    </div>
  );
};

export default ToDoState;
