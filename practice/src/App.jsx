import React, { useState } from 'react'

const App = () => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div>
      <h2>Likes App</h2>
      <LikeDisplay likes={likes} handleLike={handleLike} />
    </div>
  )
}

const LikeDisplay = ({ likes, handleLike }) => {
  return (
    <div>
      <div>Likes: {likes}</div>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App
  //q1
  // let[count,setCount]=useState(0)
  // function increment(){
  //       if(count<10){
  //         setCount(count+1)
  //       }
  //     }
  //       function decrement(){
  //         if(count>0){
  //           setCount(count-1)
  //       }
  //     }
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={increment}>increment</button>
  //     <button onClick={decrement}>decrement</button>
  //   </div>
  // )




//  q2
// function StudentCard({name,rollno,course}){
//   return(
//     <div>
//       <h3>{name}</h3>
//       <p>Roll No: {rollno}</p>
//       <p>Course: {course}</p>
//     </div>
//   )
// }
// return(
//   <div>
//     <StudentCard name="aadi shah" rollno="1" course="Computer Science" />
//       <StudentCard name="dev jaiswal" rollno="14" course="Mechanical Engineering" />
//       <StudentCard name="heehheehehehehehehe" rollno="09" course="AIDS" />
//   </div>
// )




//  q3
// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Display count={count} />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

// function Display({ count }) {
//   return <h2>{count}</h2>;
// }

// function Buttons({ setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>Increase</button>
//       <button onClick={() => setCount(c => c - 1)}>Decrease</button>
//     </div>
//   );
// }
// return <Parent />



// q4
// const [tasks, setTasks] = useState(["Task1", "Task2"])
//   const [input, setInput] = useState("")
//   const handleAdd = () => {
//     if (input.trim() === "") return
//     setTasks([...tasks, input.trim()])
//     setInput("")
//   }
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <TaskCountBadge count={tasks.length} />
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter new task"
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// const TaskCountBadge = ({ count }) => {
//   return <div>Total: {count}</div>




 