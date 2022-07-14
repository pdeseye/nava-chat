// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
    </Routes>
    </>
  )
}

export default App
