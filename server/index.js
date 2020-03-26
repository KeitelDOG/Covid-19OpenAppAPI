require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoute = require('./routes/api');
const Scheduler = require('./scheduler');

const port = process.env.APP_PORT || 3500;

const app = express();
// Middlewares
app.use(cors());
app.use(express.json({ limit:'50mb' }));
app.use(express.urlencoded({ limit:'50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, '../public')));

// SCHEDULES ------
Scheduler.start();

app.get('/', function(req, res) {
  //console.log('Megalobiz Main App server home');
  res.status(200)
    .send({
      server: 'Open App',
      status: 'Success',
      api: {
        v1: '/api/v1',
        v2: '/api/v2',
      },
    });
});

// API ENDPOINTS --
app.use('/api', apiRoute);


app.listen(port, function() {
  console.log(`Open App Server is listening to port ${port}`);
});