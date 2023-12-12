'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// 3rd Party Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();

// Our own dependencies
// const server = require('./server.js');

// Make a database connection
// This is a permanent/live connection
// Active until the app stops running
mongoose.connect( process.env.MONGODB_URL );

// Start up the server
// server.start( process.env.PORT || 3000 );
const PORT = process.env.PORT || 3001;

const Books = require('./models/books.js');


app.get ('/books', handleGetBooks);

async function handleGetBooks (request, response){
  let filter = {};
  const books = await Books.find(filter)
  response.status(200).json(books);
}

// const server = {
//   start: function(PORT){
    app.listen(PORT, () => console.log(`listening on ${PORT}`));

//   }
// }

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


// module.exports=server;






