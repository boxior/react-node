import React, {useEffect, useState} from 'react';
import './App.css';
import {addTodo, getTodos, deleteTodo, updateTodo} from "./todoApi";
import TodoFormView from "./TodoForm";
import TodoListView from "./TodoList";


function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        handleGetTodos();

    }, []);

    async function handleGetTodos() {
        const todos = await getTodos();
        console.log("todos", todos);
        setTodos(todos);
    }

    async function handleAddTodo(title) {
        await addTodo(title);
        await handleGetTodos();
    }

    async function handleDelete(id) {
        await deleteTodo(id);
        await handleGetTodos();
    }

    async function handleUpdate({id, completed}) {
        await updateTodo(id, {completed});
        await handleGetTodos();
    }

    return (
        <div className="App">
            <header className="App-header">
                <TodoFormView
                    addTodo={handleAddTodo}
                />
                <TodoListView
                    todos={todos}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />
            </header>
        </div>
    );
}

export default App;
