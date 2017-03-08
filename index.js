const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const shortid = require('shortid');
const ProgressBar = require('progress');

app.use(bodyParser.urlencoded({
    extended: true
}));

//app.upload = multer({ dest: './uploads/' })

let maxSize = 2 * 1024 * 1024; //2MB

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

function fileFilter(req, file, cb) {
    let ext = file.mimetype;
    if (ext === 'image/png' || ext === 'image/jpg'  || ext === 'image/jpeg') {
        cb(null, true);  //Success
    } else {
        cb(new Error(ext + ' is not accepted')); //Error
    }

}

app.upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: maxSize,
        files: 3
    }
});

require('./routers/routers')(app);

const server = app.listen(1234, () => {
    console.log('Start')
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Error: ' + err.message)
});

module.exports = server;