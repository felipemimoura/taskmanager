import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useTask } from '../../contexts/task'
import { Task } from '../../contexts/task/interace'
import { TaskCardProps } from './interface'
import * as Styled from './styles'

const TaskCard: React.FC<TaskCardProps> = ({ taskCard }) => {
  const { handleDeleteTask, handleSaveTask } = useTask()
  const [task, setTask] = useState<Task>({} as Task)

  useEffect(() => {
    setTask(taskCard)
  }, [taskCard])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setTask({
        ...task,
        taskStatus: event.target.value
      })
    },
    [task]
  )
  return (
    <Styled.Container data-testid="div-takscard">
      <Styled.Header>
        <h1>{task.title}</h1>
        <button onClick={() => handleDeleteTask(task.id)} type="button">
          delete
        </button>
      </Styled.Header>

      <Styled.Wrapper>
        <Styled.Content>
          <label htmlFor="status">Status: </label>
          <select id="status" onChange={(event) => handleChange(event)}>
            <option selected={task.taskStatus === 'pending'} value="pending">
              Pendente
            </option>

            <option selected={task.taskStatus === 'progress'} value="progress">
              Progresso
            </option>

            <option selected={task.taskStatus === 'done'} value="done">
              Concluido
            </option>
          </select>
        </Styled.Content>

        <button onClick={() => handleSaveTask(task)}>salvar</button>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default TaskCard
