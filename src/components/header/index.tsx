import React from 'react'
import { HeaderProps } from './interface'
import * as Styled from './styles'

const Header: React.FC<HeaderProps> = ({ onOpenNewTransacitonModal }) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <h1>TaskManager</h1>
        <button type="button" onClick={onOpenNewTransacitonModal}>
          Nova Tarefa
        </button>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Header
