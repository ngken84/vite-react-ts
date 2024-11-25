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


  return (
    <div className="App">
        <TodoItemInput addTodoItem={addTodoItem}/>
        <TodoList items={todos}/>
    </div>
  );
}

export default App
