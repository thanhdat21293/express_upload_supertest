const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routers/routers')(app);

const server = app.listen(1234, () => {
    console.log('Start')
});

module.exports = server;