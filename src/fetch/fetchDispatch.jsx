import {addUsersAction} from "../store/users";


export const fetchDispatch = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addUsersAction(json)))


    }
}