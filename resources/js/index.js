import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


if (document.getElementById('employeeeApp')) {
    ReactDOM.render(<App />, document.getElementById('employeeeApp'));
}