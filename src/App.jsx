import { useState } from 'react'
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewText] = useState("");
  const handleText = (event) => {
    setNewText(event.target.value)
  }
  const addText = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]);
  }
  const deleteText = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div>
      <div className='addTask'>
        <input onChange={handleText} />
        <button onClick={addText}>+</button>
      </div>
      <div className='list'>
        {todoList.map((task) =>
          <Task taskName={task.taskName} id={task.id} deleteText={deleteText} />
        )}
      </div>
    </div>
  )
}

export default App
