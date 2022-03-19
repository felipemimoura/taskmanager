import { render, screen } from '@testing-library/react'
import React from 'react'
import TaksCard from '.'
import faker from 'faker'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

type SutParams = {
  title?: string
  deleteTask?(): void
  saveTask?(): void
}
const makeSut = ({
  title = faker.random.words(2),
  deleteTask = jest.fn(),
  saveTask = jest.fn()
}: SutParams) => {
  render(
    <TaksCard title={title} onDeleteTask={deleteTask} onSaveTask={saveTask} />
  )
}

describe('TaksCard', () => {
  it('render correctly', () => {
    makeSut({})
    expect(screen.getByTestId('div-takscard')).toBeInTheDocument()
  })

  it('render with title correctly', () => {
    const title = faker.random.words(2)
    makeSut({ title })

    expect(screen.getByRole('heading')).toHaveTextContent(title)
  })

  it('call del button was clicked', () => {
    const deleteTask = jest.fn()

    makeSut({ deleteTask })
    const deleteButton = screen.getByText('delete')

    act(() => {
      userEvent.click(deleteButton)
    })

    expect(deleteTask).toBeCalled()
  })

  it('call save button was clicked', () => {
    const saveTask = jest.fn()

    makeSut({ saveTask })
    const saveButton = screen.getByText('salvar')

    act(() => {
      userEvent.click(saveButton)
    })

    expect(saveTask).toBeCalled()
  })
})
