var express = require('express');
var router = express.Router();

var cassandra = require('cassandra-driver');

var client = new cassandra.Client({ contactPoints: ['10.88.20.95'], protocolOptions: { port: 9043} })

client.connect((err, result) => {
  console.log("cassandra connected");
})

var getAllProducts = 'SELECT * FROM docker_practice.products'

/* GET users listing. */
router.get('/', function (req, res, next) {
  client.execute(getAllProducts, [], (err, result) => {
    if (err) {
      res.status(404).send({ msg: err });
    }
    else {
      res.json({ products: result.rows });
    }
  });
});

module.exports = router;
