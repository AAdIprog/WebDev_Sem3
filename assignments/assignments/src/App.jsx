import './App.css'
import AllTasks from './assignment2/AllTasks'


const App = () => {
  return (
    <main className="assignment-page">
      <section className="assignment-stack" aria-label="Assignment exercises">
        <AllTasks />
      </section>
    </main>
  )
}

export default App