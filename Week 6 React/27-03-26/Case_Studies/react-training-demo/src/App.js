import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/Todoitem';
import TodoStats from './components/TodoStats';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Props', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Component Communication', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo App - Communication Patterns</h1>
      <p style={{ color: '#666' }}>
        <strong>Patterns shown:</strong>
        <br />
        Parent to Child: Props passed to TodoForm, TodoItem, TodoStats
        <br />
        Child to Parent: Callbacks (addTodo, toggleTodo, deleteTodo)
        <br />
        Sibling Communication: TodoForm updates state, TodoStats displays it
      </p>

      <TodoForm onAddTodo={addTodo} />
      <TodoStats todos={todos} />

      <div>
        <h3>Your Tasks</h3>
        {todos.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
