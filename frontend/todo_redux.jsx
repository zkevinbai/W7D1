// THIS IS THE ENTRY FILE

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import rootReducer from "../frontend/reducers/root_reducer";
import Root from '../frontend/components/root';

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    const store = configureStore(rootReducer);

    window.store = store;
    ReactDOM.render(<Root store={store} />, rootElement);
})