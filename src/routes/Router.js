import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'

function Router() {

  return (
      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage/>}></Route>
          </Route>
    </Routes>
  )
}

export default Router