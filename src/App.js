import ToDoApp from "./Components/ToDoApp/ToDoApp";
import "./App.css";
import ToDoList from "./Components/ToDoList/ToDoList";
const App = () => {
  return (
    <div className="app">
      <h1>to do list</h1>
      <ToDoApp />
    </div>
  );
};

export default App;
