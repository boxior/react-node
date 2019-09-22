'use strict';
const uuidV1 = require('uuid/v1');

let todos = [
    {
        id: uuidV1(),
        completed: true,
        title: "One"
    },
    {
        id: uuidV1(),
        completed: true,
        title: "Two"
    },
    {
        id: uuidV1(),
        completed: false,
        title: "Three"
    }
];

const getTodos = () => {
    return todos;
};

const addTodo = (title) => {
    const newTodo = {
        id: uuidV1(),
        completed: false,
        title: title,
    };

    todos = [...todos, newTodo];
};

const deleteTodo = id => {
    todos = todos.filter(t => t.id !== id);
};

const updateTodo = (id, params) => {
    console.log(id, params);
    todos = todos.map(t => {
       return t.id !== id ? t : {
           ...t,
           ...params
       }
    });
};

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
};
