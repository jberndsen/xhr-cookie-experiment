const express = require('express');
const path = require('path');

// initialize exress app
const app = express();
const port = 3000;

// register middleware
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// route configuration
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/login', (req, res) => {
  res.cookie('idToken', 'supersecret', { httpOnly: true });
  res.send('logged in!');
});

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
