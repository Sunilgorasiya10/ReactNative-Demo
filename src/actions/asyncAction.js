import { FETCH_TODO } from '../actions/types';

export const asyncAction = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                dispatch({
                    type: FETCH_TODO,
                    payload: json
                })
            })
    }
}