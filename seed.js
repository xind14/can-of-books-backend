const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/books.js'); 

mongoose.connect(process.env.MONGODB_URL);

async function seed() {
  try {
    await Book.create({
      title: 'Book 1',
      description: 'Something 1',
      status: true
    });
    console.log('Book 1 was added to the database');

    await Book.create({
      title: 'Book 2',
      description: 'Something 2',
      status: true
    });
    console.log('Book 2 was added to the database');

    await Book.create({
      title: 'Book 3',
      description: 'Something 3',
      status: true
    });
    console.log('Book 3 was added to the database');
  } catch (e) {
    console.error(e.message);
  }
    mongoose.disconnect();

}

seed();
