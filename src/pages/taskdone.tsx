import React, { useEffect, useState } from 'react'
import Siderbar from '../components/sidebar'
import TaskCard from '../components/taksCard'
import { useTask } from '../contexts/task'
import { Task } from '../contexts/task/interace'

const TaskDone: React.FC = () => {
  const { tasks } = useTask()
  const [tasksDone, setTaskDone] = useState<Task[]>([])

  useEffect(() => {
    const task = tasks.filter((taskDone) => taskDone.taskStatus === 'done')

    setTaskDone(task)
  }, [tasks])

  return (
    <main>
      <Siderbar title="Tarefas" />
      <div className="wrapper">
        <h2 className="title">
          Você possui {`${tasksDone.length}`} concluidas
        </h2>
        <div className="taskContainer">
          {tasksDone.map((task) => {
            return <TaskCard key={task.id} taskCard={task} />
          })}
        </div>
      </div>
    </main>
  )
}

export default TaskDone
