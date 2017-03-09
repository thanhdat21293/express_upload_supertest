const path = require('path');
module.exports = (app) => {

    app.post('/uploads', app.upload.single('photo'), function(req, res, next) {
        //console.log(req.file);
        res.send('<h1>Upload Success</h1>');
    });

    app.post('/uploads_array', app.upload.array('photos'), function(req, res, next) {
        res.send('<h1>Upload Multi files success</h1>');
    });

    app.get('/uploads', (req, res) => {
        res.sendFile(path.resolve(app.get('appPath') + './../views/uploads.html'));
    })

}