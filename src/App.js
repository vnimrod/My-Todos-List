import React from 'react';
import './App.css';
import './index.css'

import Header from './components/header/header';
import TodoList from './components/todo-list-container.jsx/todo-list-container'


function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
