import React from 'react';
import ReactDOM from 'react-dom';
import ApiRequest from './components/ApiRequest';

import './styles.css';

function App() {
    return (
        <div className="App">
            <ApiRequest />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
