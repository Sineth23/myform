const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle the POST request from the form
app.post('/submit', (req, res) => {
  // Access the submitted form data from the request body
  const { repoName, repoURL, apiKey } = req.body;

  // Log the form data to the console
  console.log('Repository Name:', repoName);
  console.log('Repository URL:', repoURL);
  console.log('API Key:', apiKey);

  // Send a response back to the frontend
  res.json({ message: 'Form submitted successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
