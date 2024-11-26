import React, { useRef }from 'react';
import TodoItem from '../models/TodoItem';

import './TodoItemInput.css';

interface TodoItemInputProps {
    addTodoItem : (arg: TodoItem) => void
}

const TodoItemInput : React.FC<TodoItemInputProps> = ({addTodoItem}) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const createNewTodoItem = (event : React.FormEvent) => {
        event.preventDefault();
        if(textInputRef?.current?.value) {
            addTodoItem(new TodoItem(textInputRef.current.value));
            textInputRef.current.value = '';
        } else {
            alert("Please enter a To do Item");
        }

    }

    return (
        <form onSubmit={createNewTodoItem}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input id="todo-text" type="text" ref={textInputRef}></input>
            </div>
            <button type="submit">Create New To-Do Item</button>
        </form>
    );

}

export default TodoItemInput;