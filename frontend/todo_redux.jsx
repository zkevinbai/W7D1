// THIS IS THE ENTRY FILE

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';

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
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<Todo/>, root);
})