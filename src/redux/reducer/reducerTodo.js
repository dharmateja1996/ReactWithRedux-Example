const initialState = {
    todoList: [],
    title: '',
}

const reducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                title: '',
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload),
            }
        
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.payload,
            }
        default:
            return state;
    }
};

export default reducerTodo;