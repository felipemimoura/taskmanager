import React, { ChangeEvent } from 'react'
import { TaskCardProps } from './interface'
import * as Styled from './styles'

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  onDeleteTask,
  onSaveTask
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
  }
  return (
    <Styled.Container data-testid="div-takscard">
      <Styled.Header>
        <h1>{title}</h1>
        <button onClick={onDeleteTask} type="button">
          delete
        </button>
      </Styled.Header>

      <Styled.Wrapper>
        <label htmlFor="status">Status:</label>

        <select id="status" onChange={(event) => handleChange(event)}>
          <option value="pending">Pendente</option>
          <option value="progress">Executando</option>
          <option value="done">Concluido</option>
        </select>
        <button onClick={onSaveTask}>salvar</button>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default TaskCard
