import './todo.css';
const ListTodo = (props) => {
    console.log(props);
    const { name, age, data,todoList} = props;
    //callFunction("Quang Ha");
    console.log(todoList, "ListTodo");
    return (
        <>
            <ul>
                {todoList.map((value, index) => {
                    return (
                        <div className={`todo-child `} key ={value.id} >
                                <div>{value.name}</div>
                                <button>Delete</button>
                        </div>
                    )
                })}
                
            </ul>
        </>
    )
}

export default ListTodo