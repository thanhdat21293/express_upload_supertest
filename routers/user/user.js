module.exports = (app) => {
    app.get('/user', (req, res) => {
        res.send('This page for User');
    });
}