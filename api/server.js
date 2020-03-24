// define your main API router here
//  just require and use your routes and logic here
//  server infrastructure will go in the main index.js

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({ wow: 'it works' });
});

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

module.exports = app;
