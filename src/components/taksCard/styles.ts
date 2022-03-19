import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem;

  border-radius: 0.8rem;
  background-color: var(--white);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  label {
    font-size: 1.6rem;
  }

  select {
    width: 100%;
  }
`
