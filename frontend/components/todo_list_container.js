import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../reducers/selectors';

const mapStatetoProps = state => ({
    todos: allTodos(state)
});

// const mapDispatchtoProps = state => ({
//     todos: state.todos
// });

const TodoListContainer = connect(mapStatetoProps, null)(TodoList);

export default TodoListContainer;