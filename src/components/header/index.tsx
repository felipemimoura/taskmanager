import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './styles'

const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <h1>TaskManager</h1>
        <button type="button">
          <Link to="/newTaks">Nova Tarefa</Link>
        </button>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Header
