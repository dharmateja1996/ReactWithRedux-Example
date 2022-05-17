import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addToDoAction, changeTitleAction, deleteToDoAction,} from '../../redux/action/actionForTodo';


import './index.css'

const Todo = () => {
    const gState = useSelector((state) => state.reducerTodo);

    const dispatch = useDispatch();
    const onHandleChange = (e) => {
        
        // dispatch({ type: "CHANGE_TITLE", payload: e.target.value });

        dispatch(changeTitleAction(e.target.value));


    };
    const onAddTodo = () => {

        const newTodo = {
            id: uuidv4(),
            title: gState.title,
            completed: false,
        };
        // dispatch({ type: "ADD_TODO", payload: newTodo });

        dispatch(addToDoAction(newTodo));

    };

    const onDeleteTodo = (id) => {
        // dispatch({ type: "DELETE_TODO", payload: id });

        dispatch(deleteToDoAction(id));
        
    }

   





  return (
    <div className='todo-app-container'>
        <h1>Todo</h1>
        <div>
            <input value={gState.title} onChange={onHandleChange} type="text" placeholder="Add Todo" />
            <button onClick={onAddTodo}>Add</button>
        </div>

        <ul className='todo-list-container'>
            {gState.todoList.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <span>{todo.title}</span>
                    <div>
                        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                    
                    </div>
                </li>
            ))}
        </ul>
        
      
    </div>
  )
}

export default Todo
