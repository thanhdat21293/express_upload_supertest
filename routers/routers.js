/**
 * Created by thanhdat21293 on 3/7/17.
 */

module.exports = function (app) {

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

};