import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputTodo from './components/todo/InputTodo'
import ListTodo from './components/todo/ListTodo'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
