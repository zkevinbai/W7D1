import RECIEVE_TODOS from "../actions/todo_actions";
import RECIEVE_TODO from "../actions/todo_actions";

const todosReducer = (state={}, action) => {
    switch(action.type){
        case RECIEVE_TODOS:

        case RECIEVE_TODO:
            
        default: 
            return state;
    }
};

export default todosReducer;