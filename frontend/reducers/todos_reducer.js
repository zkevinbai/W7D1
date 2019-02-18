import {RECIEVE_TODOS} from "../actions/todo_actions";
import {RECIEVE_TODO} from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case RECIEVE_TODOS:

        case RECIEVE_TODO:
            
        default: 
            return state;
    }
};

export default todosReducer;