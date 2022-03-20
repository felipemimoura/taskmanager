import React, { createContext, useCallback, useContext, useState } from 'react'
import { ContextData, Task } from './interace'

const TaskContext = createContext<ContextData>({} as ContextData)

const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const handleAddTask = useCallback((task: Task) => {
    setTasks((state) => ({ ...state, task }))
  }, [])

  const handleDeleteTask = useCallback(
    (id: number) => {
      const taskToDelete = tasks.filter((task) => task.id !== id)
      setTasks(taskToDelete)
    },
    [tasks]
  )

  const handleSaveTask = useCallback(
    (task: Task) => {
      const taskToUpadate = tasks.map((taskUpdate) =>
        taskUpdate.id === task.id
          ? {
              ...taskUpdate,
              taskStatus: task.taskStatus
            }
          : taskUpdate
      )

      setTasks(taskToUpadate)
    },
    [tasks]
  )

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleDeleteTask,
        handleSaveTask,
        handleAddTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = (): ContextData => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask deve ser utilkizado dentro de um TaskProvider')
  } else {
    return context
  }
}

export { TaskProvider, useTask }
