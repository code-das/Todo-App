import React from 'react';
import Todo from '../components/Todo';





const TodoList = (props) =>{
    return(
        <div className="todo-container">
<ul className="todo-list">
{
    props.filteredTodos.map(todo =>(
        <Todo key = {todo.id} todos = {props.filteredTodos} data = {todo} setTodos = {props.setTodos}/>
    ))
};
</ul>

</div>

    );
}


export default TodoList;


