import {addManyCustomerAction} from "../store/customer";


export const fetchAction = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomerAction(json)))
    }
}