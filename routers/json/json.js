module.exports = (app) => {
    app.get('/json', function (req, res) {
        res.json({msg: 'Hello'})
    });
}