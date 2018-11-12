var express = require('express');
fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
  try {
    var img = fs.readFileSync('img/' + req.query.imageName);
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
  }
  catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
