import './App.css'
import TodoList from './components/TodoList'
import TodoItem from './models/TodoItem';

const App: React.FC = () => {

  const todos = [new TodoItem("Test")];


  return (
    <div className="App">
        <TodoList items={todos}/>
    </div>
  );
}

export default App
