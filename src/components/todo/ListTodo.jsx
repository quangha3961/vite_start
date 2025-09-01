const ListTodo = (props) => {
    console.log(props);
    const {name, age, data, callFunction} = props;
    callFunction("Quang Ha");
    return (
        <>
            <ul>
                <li>My name is {name}</li>
                <li>My age is {age}</li>
                <li></li>  
            </ul>
        </>
    )
}

export default ListTodo