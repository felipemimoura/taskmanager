import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker, { fake } from 'faker'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import Siderbar from '.'
import { BrowserRouter } from 'react-router-dom'
type SutParms = {
  title?: string
}
type SutTypes = {
  history: MemoryHistory
}

const makeSut = ({ title = faker.random.word() }: SutParms): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <BrowserRouter>
      <Siderbar title={title} />
    </BrowserRouter>
  )

  return {
    history
  }
}
describe('Sidebar', () => {
  it('render correctly', () => {
    const title = faker.random.word()
    makeSut({ title })

    const sidebarTitle = screen.getByText(title)
    expect(sidebarTitle).toBeInTheDocument
  })

  it('shoud be redericty on click at link', () => {
    makeSut({})
    const linkName = screen.getByText('concluidas')

    userEvent.click(linkName)

    expect(linkName).toHaveAttribute('href', '/taskdone')
  })
})
