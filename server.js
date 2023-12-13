'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleGetBooks = require('./handlers/getbooks.js')
const handlePostBooks = require('./handlers/postbooks.js')
const Books = require('./models/books.js');
const handleDeleteBooks = require('./handlers/deletebooks.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get ('/books', handleGetBooks);
app.get('/', (request, response) => {
  response.send('home page')
})
app.get('/test', (request, response) => {
  response.send('test request received')
})
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.post ('/books', handlePostBooks);
app.delete ('/books/:id', handleDeleteBooks)

const server = {
  start: function(PORT){
    app.listen(PORT, () => console.log(`listening on ${PORT}`));

  }
}

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

module.exports=server;
