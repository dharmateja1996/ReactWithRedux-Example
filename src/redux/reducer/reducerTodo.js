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
        case 'EDIT_TODO':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title,
                        }
                    }
                    return todo;
                }),
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