module.exports.delegateRoutes = function (app) {
    app.use(function(req, res, next) {
        if ( /^\/api\/.*/.test(req.url) ) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            if (req.method == "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            }
        }
        next();
    });

    app.get('/api/test', (req, res) => {
        res.json({time: Date.now(), msg: 'API test response'});
    });
}