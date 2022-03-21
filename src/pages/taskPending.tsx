import React, { useEffect, useState } from 'react'
import Siderbar from '../components/sidebar'
import TaskCard from '../components/taksCard'
import { useTask } from '../contexts/task'
import { Task } from '../contexts/task/interace'

const TaskPending: React.FC = () => {
  const { tasks } = useTask()
  const [taskPending, setTaskPending] = useState<Task[]>([])

  useEffect(() => {
    const task = tasks.filter((taskDone) => taskDone.taskStatus === 'progress')

    setTaskPending(task)
  }, [tasks])

  return (
    <main>
      <Siderbar title="Tarefas" />
      <div className="wrapper">
        <h2 className="title">
          Você possui {`${taskPending.length}`} pendentes
        </h2>
        <div className="taskContainer">
          {taskPending.map((task) => {
            return <TaskCard key={task.id} taskCard={task} />
          })}
        </div>
      </div>
    </main>
  )
}

export default TaskPending
