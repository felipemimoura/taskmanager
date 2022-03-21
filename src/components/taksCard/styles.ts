import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 2.4rem;

  border-radius: 0.8rem;
  background-color: var(-gray-900);
  border: 0.4rem solid var(--pink-800);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  h1 {
    color: var(--white);
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  label {
    font-size: 1.6rem;
    color: var(--white);
  }
`

export const Content = styled.div`
  display: flex;
  gap: 0.8rem;
`
