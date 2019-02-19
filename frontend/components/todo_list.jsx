import React from 'react';
class TodoList extends React.Component {

    render() {
        return (
            <>
                <h1>Todos App</h1>
                {this.props.todos.forEach(todo => (
                    <li id={todo.id} >{todo}</li>
                ))}
            </>
        );
    }

    componentDidMount(){

    }
}

export default TodoList;