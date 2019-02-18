export const RECIEVE_TODOS = 'RECIEVE_TODOS';
export const RECIEVE_TODO = 'RECIEVE_TODO';

export const recieveTodos = (todos) => {
    return {
        type: RECIEVE_TODOS,
        todos: todos,
    };
};

export const recieveTodo = (todo) => {
    return {
        type: RECIEVE_TODO,
        todos: todo,
    };
};