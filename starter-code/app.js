// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// // Make everything inside of views/ available
// app.use(express.static('views'));

// Home page : home.html
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/home.html');
});

// //img route
// app.get('/', (request, response, next) => {
//   response.sendFile(__dirname + '/public/img');
// });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});