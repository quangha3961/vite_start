import './todo.css';
const ListTodo = (props) => {
    console.log(props);
    const { name, age, data, todoList, deleteTodo } = props;
    //callFunction("Quang Ha");
    console.log(todoList, "ListTodo");

    const handleDelelete = (id) => {
        deleteTodo(id);
    }
    return (
        <>
            <ul>
                {todoList.map((value, index) => {
                    return (
                        <div className={`todo-child `} key ={value.id} >
                                <div>{value.name}</div>
                                <button onClick={() => {
                                    handleDelelete(value.id);
                                }}>Delete</button>
                        </div>
                    )
                })}
                
            </ul>
        </>
    )
}

export default ListTodo