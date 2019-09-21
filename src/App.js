import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {

    useEffect(() => {
        async function f() {
            const res = await fetch(API_URL);
            const data = await res.json();

            console.log("data", data);
        }

        f();

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React I
                </a>
            </header>
        </div>
    );
}

export default App;
