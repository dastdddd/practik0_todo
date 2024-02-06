import React from 'react';
import './App.css';
import TodoHeader from './components/todoHeader';
import TodoSubmit from './components/todoSubmit';
import TodoList from './components/todoList';

const App = () => {
  return (
    <div>
      <TodoHeader/>
      <TodoSubmit/>
      <TodoList/>
    </div>
  );
};

export default App;