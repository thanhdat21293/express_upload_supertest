module.exports = (app) => {
    app.post('/uploads', app.upload.single('photo'), function(req, res, next) {
        res.send('Upload success');
    });

    app.post('/uploads_array', app.upload.array('photos'), function(req, res, next) {
        res.send('<h1>Upload Multi files success</h1>');
    });
}