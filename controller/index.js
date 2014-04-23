// Scott Walker

var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {title: 'Express'});
});

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/userform', function(req, res) {
    res.render('userform.ejs', {action: '/displayUserData'}); // probs need to change action
});

router.post('/displayUserData', function(req, res) {
    res.render('displayUserData.ejs', req.body);
});

module.exports = router;
