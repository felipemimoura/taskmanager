import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarProps } from './interface'
import * as Styled from './styles'

const Siderbar: React.FC<SidebarProps> = ({ title }) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Links to="/">home</Styled.Links>
      <Styled.Links to="/taskpending">pendentes</Styled.Links>
      <Styled.Links to="/taskprogress">em execução</Styled.Links>
      <Styled.Links to="/taskdone">concluidas</Styled.Links>
    </Styled.Container>
  )
}

export default Siderbar
