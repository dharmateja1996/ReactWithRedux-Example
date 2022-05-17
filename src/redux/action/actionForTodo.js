import { ADD_TODO, CHANGE_TITLE, DELETE_TODO } from "./actionTypes"

export const addToDoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    }
}

export const deleteToDoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload,
    }
}

export const changeTitleAction = (payload) => {
    return {
        type: CHANGE_TITLE,
        payload: payload,
    }
}

