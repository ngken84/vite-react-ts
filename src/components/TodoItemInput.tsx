import React, { useRef }from 'react';
import TodoItem from '../models/TodoItem';

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
            <input type="text" ref={textInputRef}></input>
            <button type="submit">Create New To-Do Item</button>
        </form>
    );

}

export default TodoItemInput;