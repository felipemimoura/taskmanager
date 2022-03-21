import faker from 'faker'
import React, { FormEvent, useCallback, useState } from 'react'
import Siderbar from '../components/sidebar'
import { useTask } from '../contexts/task'
import { Task } from '../contexts/task/interace'

const Newtask: React.FC = () => {
  const [title, setTitle] = useState('')
  const [taskStatus, setTaskStauts] = useState('pending')
  const { handleAddTask } = useTask()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      if (!title) {
        return
      }

      const newTask: Task = {
        title,
        taskStatus: taskStatus,
        id: faker.datatype.number()
      }

      handleAddTask(newTask)
      setTitle('')
      setTaskStauts('pending')
    },
    [handleAddTask, taskStatus, title]
  )

  return (
    <main>
      <Siderbar title="Tarefas" />
      <div className="wrapper">
        <h2 className="title">Cadatrar uma nova tarefa</h2>
        <form className="formAddClass" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome da nova tarefa"
            onChange={(event) => setTitle(event.target.value)}
            defaultValue={title}
          />
          <select
            id="status"
            onChange={(event) => setTaskStauts(event.target.value)}
          >
            <option defaultValue="pending">Pendente</option>

            <option value="progress">Executando</option>

            <option value="done">Concluido</option>
          </select>
          <button type="submit">cadastar</button>
        </form>
      </div>
    </main>
  )
}

export default Newtask
