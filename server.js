const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const {getTodos, addTodo, deleteTodo, updateTodo} = require('./server/todos');

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', "http://localhost:3000");
    res.set('Access-Control-Allow-Headers', "content-type");
    res.set('Access-Control-Allow-Methods', "DELETE, PATCH");
    next();
});

app.get('/api/todos', (req, res) => {
    res.json(getTodos());
});

app.post('/api/todos', bodyParser.json(), (req, res) => {
    addTodo(req.body.title);
    const todos = getTodos();
    res.json(todos[todos.length - 1]);
});

app.delete('/api/todos/:id', (req, res) => {
    console.log("req.body", req.params.id);
    const id = req.params.id;
    deleteTodo(id);
    res.json({status: "success"});
});

app.patch('/api/todos/:id', bodyParser.json(), (req, res) => {
    const id = req.params.id;
    updateTodo(id, req.body);
    const todos = getTodos();
    res.json(todos.find(t => t.id === id));
});

app.use(express.static('build'));

app.listen(port, () => {
    console.log("example app listening on port " + port);
});
