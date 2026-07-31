
import { useState } from 'react';

const Q4 = () => {
  const [tasks, setTasks] = useState(["Task1", "Task2"])
  const [input, setInput] = useState("")
  const handleAdd = () => {
    if (input.trim() === "") return
    setTasks([...tasks, input.trim()])
    setInput("")
  }
  return (
    <div className="assignment-card">
      <h2>Q4. Todo Count Badge</h2>
      <TaskCountBadge count={tasks.length} />
      <div className="todo-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}
const TaskCountBadge = ({ count }) => {
  return <div>Total: {count}</div>

}








export default Q4