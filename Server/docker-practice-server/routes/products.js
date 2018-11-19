var express = require('express');
fs = require('fs');
var router = express.Router();

var cassandra = require('cassandra-driver');
var host = "db";
var client = new cassandra.Client({ contactPoints: [host], protocolOptions: { port: 9042} })

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
      res.json({
        products: result.rows.map(row => {
          return {
            id: row.id,
            description: row.description,
            name: row.name,
            price: row.price,
            mainImageUrl: 'http://localhost:3000/image?imageName=' + row.img
        }
      }) });
    }
  });
});

module.exports = router;
