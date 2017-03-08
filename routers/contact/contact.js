module.exports = (app) => {

    app.get('/contact', (req, res) => {
        res.send('This page for Contact');
    });

}

