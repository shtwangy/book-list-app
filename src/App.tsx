import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <section className="nav">
                <h1>読みたい本リスト</h1>
                <div className="button-like">本を追加</div>
            </section>
            <section className="main">
                <h1>Book List</h1>
            </section>
        </div>
    );
}

export default App;
