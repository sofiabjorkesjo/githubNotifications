'use strict';

    let router = require('express').Router();
    
    router.get('/dashboard', function (req, res, next) {
        console.log('hejhej')
        res.send({ express: 'Test' });  
    });
    
    router.get('/:code', function (req, res, next) {
        let temporaryCode = req.url.substring(1);
        res.send({ express: 'Heeej' });  
    });
    
    
    module.exports = router;


