//Dependancies and requirements
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const html = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');

// Express middleware 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);



//Code to launch the server and tell it what port to listen to
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});