import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./components/Item";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    return (
        <div className="App" style={{margin: '100px'}}>
            <div style={{marginBottom: '20px'}}>
                <NewExpense />
            </div>
            <Item title='my title #1' />
            <Item title='my title #2' />
        </div>
  );
}

export default App;
