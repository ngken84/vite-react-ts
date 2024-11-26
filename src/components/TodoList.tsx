import React from 'react';
import TodoItem from '../models/TodoItem';

import './TodoList.css';

interface TodoListProps {
    items : TodoItem[],
    removeTodoItem : (arg0 : TodoItem) => void
}

const TodoList : React.FC<TodoListProps> = ({items, removeTodoItem}) => {
    
    return (
        <ul className="todo-list">
            {items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => {
                        removeTodoItem(todo);
                    }}>DELETE</button>
                </li>))}
        </ul>
    );
}

export default TodoList;