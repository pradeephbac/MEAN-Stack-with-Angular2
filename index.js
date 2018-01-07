var express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');

var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('could not connect to db', err);
    } else {
        console.log('connect to db', config.db);
    }
});
//set build directory of Angular2 
app.use(express.static(__dirname + '/client/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('server starts at port 8080');
});