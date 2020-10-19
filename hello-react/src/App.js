import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Pain', 'Lait'])
  const [newTodo, setNewTodo] = useState('');
  return (
    <div className="App">
      <form onSubmit={(event) => {
        event.preventDefault();
        setTodos([
          ...todos,
          newTodo,
        ])
      }}>
      
        <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
        <button>+</button>
      </form>
      <div>
        <ul>
          {todos.map((t) => <li>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
