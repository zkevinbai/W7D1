import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <h1>Todos App</h1>
            </>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(<Todo/>, root);
})