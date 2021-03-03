const express = require('express');
const compression = require('compression');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(compression());

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});