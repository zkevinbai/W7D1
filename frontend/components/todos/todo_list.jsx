import React from 'react';
import TodoListItem from './todo_list_item';
class TodoList extends React.Component {

    render() {
        // debugger
        return (
            <>
                <h1>Todos App</h1>
                <ul>
                    {this.props.todos.map(todo => {
                        return(
                            <li><TodoListItem todo={todo} /></li>
                        )
                    })}
                </ul>
            </>
        );
    }

    componentDidMount(){

    }
}

export default TodoList;

                        // <ul>
                        //     {todo.id}
                        //     <li>{todo.title}</li>
                        //     <li>{todo.body}</li>
                        //     <li>{todo.done.toString()}</li>
                        // </ul>