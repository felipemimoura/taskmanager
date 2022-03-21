import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Links = styled(Link)`
  color: var(--white);
  font-size: 2rem;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    color: var(--pink-800);
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem;
  height: calc(100vh - 2.4rem);
  border-right: 1px solid var(--pink-800);
`
export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--pink-800);
`
