import { useState } from "react"

const InputTodo = (props) => {
    const [input, setInput] = useState("quangha");
    const {addNewTodo} = props;
    const handleOnChange = (name) =>{
        setInput(name);
    }

    const handleOnClick = (input) => {
        addNewTodo(input);
    }
    return (
        <>
            <input type="text" placeholder="Add a todo"  onChange={ (event) => {
                handleOnChange(event.target.value)
            }}
            value={input}/>
            <button onClick ={() => {
                handleOnClick(input)
            }}>Add</button>
        </>
    )
}

export default InputTodo