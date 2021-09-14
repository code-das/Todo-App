import React from 'react';

const Todo = (props) =>{


    //events 
    const deleteHandler = () =>
    {
        props.setTodos(props.todos.filter((el) => el.id !== props.data.id));

    };
    
    const completeHandler = () =>
    {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.data.id){
                return{
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }));
    };
    return(
        
        <div className = "todo">
            <li className = {`todo-item ${props.data.completed ? "completed" : ""}`}>{props.data.text}</li>
            <button onClick = {completeHandler} className = " complete-btn"><i className = "fas fa-check"></i></button>
            <button onClick = {deleteHandler} className = " trash-btn"><i className = "fas fa-trash"></i></button>
        </div>

    );
};

export default Todo;
    

