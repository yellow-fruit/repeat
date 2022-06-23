import React from 'react';
import './App.css';

import {Todolist} from "./Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone:  true},
        {id: 3, title: 'React', isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: false},
        {id: 3, title: 'Yo', isDone: true}
    ]

    return (

        <div className="App">
            <Todolist title = {'What to learn'} tasks1 ={tasks1}/>
            <Todolist title = {'What to buy'} tasks1 = {tasks2}/>

        </div>
    );
}

export default App;
