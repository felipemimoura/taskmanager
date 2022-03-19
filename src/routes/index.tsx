import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages'
import TaskDone from '../pages/taskdone'
import TaskPending from '../pages/taskPending'
import TaskProgress from '../pages/taskprogress'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="taskdone" element={<TaskDone />} />
      <Route path="taskprogress" element={<TaskProgress />} />
      <Route path="taskpending" element={<TaskPending />} />
    </Routes>
  )
}

export default Router
