// Create web server
// 1. create a web server
// 2. create a route for "/"
// 3. create a route for "/coments"
// 4. create a route for "/coments/new"
// 5. create a route for "/coments/:id"
// 6. create a route for "/coments/:id/edit"
// 7. create a route for "/coments/:id/delete"

// 1. create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. create a route for "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. create a route for "/coments"
app.get('/coments', (req, res) => {
    res.send('coments');
});

// 4. create a route for "/coments/new"
app.get('/coments/new', (req, res) => {
    res.send('new coments');
});

// 5. create a route for "/coments/:id"
app.get('/coments/:id', (req, res) => {
    res.send('show coments');
});

// 6. create a route for "/coments/:id/edit"
app.get('/coments/:id/edit', (req, res) => {
    res.send('edit coments');
});

// 7. create a route for "/coments/:id/delete"
app.get('/coments/:id/delete', (req, res) => {
    res.send('delete coments');
});

// 1. create a web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});