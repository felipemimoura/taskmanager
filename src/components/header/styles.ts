import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 0.2rem solid var(--pink-800);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
  }

  button {
    font-size: 2rem;
    color: #fff;
    background: var(--pink-800);
    border: 0;
    padding: 1rem;
    border-radius: 0.8rem;

    border: 1px solid var(--pink-800);

    transition: filter 0.2s;

    a {
      color: var(--white);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`
