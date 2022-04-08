

const initialSate = {
    users : []
}

export const ADD_USERS = "ADD_USERS"
export const REMOVE_USERS = "REMOVE_USERS"

export const userReducer = (state = initialSate, action) => {
    switch (action.type){
        case ADD_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case REMOVE_USERS:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state
    }
}

export const addUsersAction = (payload) => ({type: ADD_USERS, payload })
export const removeUsersAction = (payload) => ({type: REMOVE_USERS, payload})