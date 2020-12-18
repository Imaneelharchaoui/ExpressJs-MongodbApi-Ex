const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/development.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the back-end-mongoDB app database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ExpressMongoApp application"});
});

require('./app/routes/client.routes.js')(app);

app.use(bodyParser.json());
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
