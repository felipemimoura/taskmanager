import React from 'react'
import Siderbar from '../components/sidebar'
import TaskCard from '../components/taksCard'
import { useTask } from '../contexts/task'

const Home = () => {
  const { tasks } = useTask()

  return (
    <main>
      <Siderbar title="Tarefas" />
      <div className="wrapper">
        <h2 className="title">Você possui {`${tasks.length}`} cadastradas</h2>
        <div className="taskContainer">
          {tasks.map((task) => {
            return <TaskCard key={task.id} taskCard={task} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Home
