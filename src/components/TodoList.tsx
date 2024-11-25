import React from 'react';
import TodoItem from '../models/TodoItem';

import './TodoList.css';

interface TodoListProps {
    items : TodoItem[]
}

const TodoList : React.FC<TodoListProps> = ({items}) => {

    
    return (
        <ul className="todo-list">
            {items.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
}

export default TodoList;