import { useState } from 'react';
import './App.css'
import TodoItemInput from './components/TodoItemInput';
import TodoList from './components/TodoList'
import TodoItem from './models/TodoItem';

const App: React.FC = () => {

  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodoItem = (item: TodoItem) => {
    setTodos((tds: TodoItem[]) => {
      const newTds = [...tds, item];
      return newTds;
    })
  }

  const removeTodoItem = (item: TodoItem) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != item.id);
    });
  }

  return (
    <div className="App">
        <TodoItemInput addTodoItem={addTodoItem}/>
        <TodoList items={todos} removeTodoItem={removeTodoItem}/>
    </div>
  );
}

export default App
