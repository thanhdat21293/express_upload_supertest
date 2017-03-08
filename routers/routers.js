module.exports = (app) => {

    require('../routers/contact/contact')(app);
    require('../routers/user/user')(app);
    require('../routers/home/home')(app);
    require('../routers/json/json')(app);
    require('../routers/uploads/uploads')(app);

};