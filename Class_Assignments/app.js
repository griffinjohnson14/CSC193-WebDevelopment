'use strict';
const express = require('express');
const app = express();


app.get('/math/circle/:r', function(req, res) {
    // Grab the radius from the URL and convert it from text to a number
    let r = parseFloat(req.params['r']);

    // Calculate area and circumference using the formulas from the assignment
    let area = Math.PI * r * r;
    let circumference = Math.PI * 2 * r;

    // Send back the results as JSON
    res.json({ "area": area, "circumference": circumference });
});


app.get('/hello/name', function(req, res) {
  // Grab the first and last name parameters from the URL query string
  let firstName = req.query['first'];
  let lastName = req.query['last'];

  // If both are missing, tell the user they need both
  if (!firstName && !lastName) {
    res.type('text').status(400).send('Missing Required GET parameters: first, last');
    // If only last name is missing
  } 
  else if (!lastName) {
    res.type('text').status(400).send('Missing Required GET parameters: last');
    // If only first name is missing
  } 
  else if (!firstName) {
    res.type('text').status(400).send('Missing Required GET parameters: first');
    // Both are provided, send the greeting
  } 
  else {
    res.type('text').send('Hello ' + firstName + ' ' + lastName);
  }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT);