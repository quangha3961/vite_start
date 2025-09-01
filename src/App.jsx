import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputTodo from './components/todo/InputTodo'
import ListTodo from './components/todo/ListTodo'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  const name = "Quang Ha";
  const age = 18;
  const data = {
    address: "Hanoi",
    job: "Developer"
  }
  
  const [todoList, setTodoList] = useState([
  ])
  
  const deleteTodo = (id) => {
    const newListTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newListTodo);
  }
  const addNewTodo = (name) => {
    const newTodo ={
      id: crypto.randomUUID(), 
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
      <Outlet />
      <Header />
      <h1>Todo List</h1>
      <InputTodo
        addNewTodo={addNewTodo} 
      />
      <ListTodo
      name = {name}
      age = {age}
      data = {data}
      todoList = {todoList}
      deleteTodo={deleteTodo}
      />
      {todoList.length === 0 && 
      <img src={reactLogo} className="logo react" alt="React logo" />
  }
      <Footer />
    </>
  )
}

export default App
