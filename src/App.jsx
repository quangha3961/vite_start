import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputTodo from './components/todo/InputTodo'
import ListTodo from './components/todo/ListTodo'
import './App.css'
import './index.css'
const App = () => {
  const name = "Quang Ha";
  const age = 18;
  const data = {
    address: "Hanoi",
    job: "Developer"
  }

  const callFunction = (name) => {
    alert(`Hello ${name}`);
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputTodo />
      <ListTodo
      name = {name}
      age = {age}
      data = {data}
      callFunction = {callFunction}
      />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  )
}

export default App
