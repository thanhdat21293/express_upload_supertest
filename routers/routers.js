const path = require('path');
module.exports = (app) => {

    app.get('/', (req, res) => {
        //res.json({a: '1', b: '5', c: '1'})
        res.send('hello World!')
    });

    app.get('/json', function (req, res) {
      res.json({msg: 'Hello'})
    });

    app.get('/test1', (req, res) => {
        res.cookie('thanhdat', 'abc');
        res.send();
    });

    app.post('/', (req, res) => {
        //console.log(req.body);
        //res.json(req.body);
        res.json({a: '1', b: '5', c: '0'})
    });

    app.post('/uploads', app.upload.single('photo'), function(req, res, next) {
        //console.log(req.file);
        res.send('<h1>Upload Success</h1>');
    });

    app.post('/uploads_array', app.upload.array('photos'), function(req, res, next) {
        res.send('<h1>Upload Multi files success</h1>');
    });

    app.get('/uploads', (req, res) => {
        res.sendFile(path.resolve(app.get('appPath') + './../views/uploads.html'));
    });

    app.get('/test_upload', (req, res) => {
        res.sendFile(path.resolve(app.get('appPath') + './../views/uploads.html'));
    });

    app.post('/test_upload', app.upload.single('photo'), function(req, res, next) {
        //res.send(req.file.filename);
        //console.log(req.file);
        //res.send('<h1>Upload Success</h1> <br> File Name: ' + req.file.filename);
        res.json({image: req.file.destination + req.file.filename})
        //res.json({image: 'images/abc.jpeg'})
        //res.json({photo: 'images/abc.jpeg'})
    });

};