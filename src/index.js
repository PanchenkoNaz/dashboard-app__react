import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App'

import { ContextProvider } from './contexts/ContextProvider';

// hook our react application to the root <div>
// wrap the app with the ContextProvider
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>, 
    document.getElementById('root')
);