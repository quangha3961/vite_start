import reactLogo from '../../assets/react.svg'
import InputTodo from './InputTodo'
import ListTodo from './ListTodo'
import { useState } from 'react'

const TodoApp = () => {
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
        const newTodo = {
            id: crypto.randomUUID(),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }
    return (
        <>
            <h1>Todo List</h1>
            <InputTodo
                addNewTodo={addNewTodo}
            />
            <ListTodo
                name={name}
                age={age}
                data={data}
                todoList={todoList}
                deleteTodo={deleteTodo}
            />
            {todoList.length === 0 &&
                <img src={reactLogo} className="logo react" alt="React logo" />
            }
        </>
    )
}

export default todoApp;
