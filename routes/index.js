var express = require('express');
var router = express.Router();
var rend = require('../util/rend');

/* GET home page. */
router.get('/', function(req, res, next) {
  rend(res)
    .bc('fa-home', 'Home', 'index.html')
    .bc('fa-laptop', 'Dashboard')
    .render('index');
});

module.exports = router;
