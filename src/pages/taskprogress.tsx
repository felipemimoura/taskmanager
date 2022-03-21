import React, { useEffect, useState } from 'react'
import Siderbar from '../components/sidebar'
import TaskCard from '../components/taksCard'
import { useTask } from '../contexts/task'
import { Task } from '../contexts/task/interace'

const TaskProgress: React.FC = () => {
  const { tasks } = useTask()
  const [taskProgress, setTaskProgress] = useState<Task[]>([])

  useEffect(() => {
    const task = tasks.filter((taskDone) => taskDone.taskStatus === 'progress')

    setTaskProgress(task)
  }, [tasks])

  return (
    <main>
      <Siderbar title="Tarefas" />
      <div className="wrapper">
        <h2 className="title">
          Você possui {`${taskProgress.length}`} em progresso
        </h2>
        <div className="taskContainer">
          {taskProgress.map((task) => {
            return <TaskCard key={task.id} taskCard={task} />
          })}
        </div>
      </div>
    </main>
  )
}

export default TaskProgress
