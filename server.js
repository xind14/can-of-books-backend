'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Books = require('./models/books.js');

const app = express();
app.use(cors());




app.get ('/books', handleGetBooks);
app.post ('/books', handlePostBooks);

async function handleGetBooks (request, response){
  let filter = {};
  const books = await Books.find(filter)
  response.status(200).json(books);
}

async function handlePostBooks (request, response){
  let filter = {};
  const books = await Books.find(filter)
  response.status(200).json(books);
}

const server = {
  start: function(PORT){
    app.listen(PORT, () => console.log(`listening on ${PORT}`));

  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

module.exports=server;
