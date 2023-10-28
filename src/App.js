import ToDoApp from "./Components/ToDoApp/ToDoApp";
import "./App.css";
import ToDoList from "./Components/ToDoList/ToDoList";
const App = () => {
  return (
    <div className="container">
      <h1 className="todoHeader">to do list</h1>
      <ToDoApp />
    </div>
  );
};

export default App;
