import TabelTodo from "../TableTodo/TableTodo";

const ToDoList = ({todos}) => {
  console.log(todos)
if(todos.length==0) return <p>There is no text</p>
  return (
    <div>
    <div></div>
      {todos.map((todo) => {
        return <TabelTodo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default ToDoList;
