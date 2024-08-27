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
      completed: false,
    }
    setTodoList([...todoList, task]);
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task;
        }
      }
      )
    )
  }

  return (
    <div>
      <div className='addTask'>
        <input onChange={handleText} />
        <button onClick={addText}>+</button>
      </div>
      <div className='list'>
        {todoList.map((task) =>
          <Task taskName={task.taskName}
            id={task.id}
            completed ={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </div>
    </div>
  )
}

export default App
