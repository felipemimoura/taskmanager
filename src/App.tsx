import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TaskProvider } from './contexts/task'
import Router from './routes'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Router />
        <GlobalStyles />
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
