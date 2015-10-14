var express = require('express');
var router = express.Router();
var path = require ('path');


/* GET home page. */
router.get('/', function(req, res) {
  console.log('hit the / endpoint');
  res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

module.exports = router;
