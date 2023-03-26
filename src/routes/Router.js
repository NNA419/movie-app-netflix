import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DetailMoviePage from '../pages/DetailMoviePage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

function Router() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route path="/Login" element={<LoginPage />} />
      <Route path='/movie/:movieId' element={<HomePage/>} />
    </Routes>
  );
}

export default Router