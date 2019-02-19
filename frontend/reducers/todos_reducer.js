import {RECEIVE_TODOS} from "../actions/todo_actions";
import {RECEIVE_TODO} from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_TODOS:
            let newTodos = {};
            action.todos.forEach((todo, index) => {
                newTodos[index] = todo;
            });
            return newTodos;
        case RECEIVE_TODO:
            let todo = action.todo;
            let receiveTodo = Object.assign({}, state);
            receiveTodo[todo.id] = todo;
            return receiveTodo;
        default: 
            return state;
    }
};

export default todosReducer;