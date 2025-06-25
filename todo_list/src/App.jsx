import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    const newTodo = {
      text: task,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTask("");
  };
  const toggleTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };
  const deleteTodo = (index) => {
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  };
  return (
    <>
      <input
        type="text"
        style ={{ width: "300px", height: "30px", margin: "10px" }}
        placeholder="enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>
      {todoList.length > 0 &&
        todoList.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none", margin:'10px'
              }}
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
    </>
  );
}

export default App;
