const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: true} ));

module.exports = router;

const fruits = [
  {
    id: 1,
    name: "banana"
  },
  {
    id: 2,
    name: "orange"
  },
  {
    id: 3,
    name: "Grapefruit"
  }
];

router.get('/', (req, res) => res.send('Hello World'));

router.get('/fruits', (req, res) => res.send(fruits));

router.get('/fruits/:id', (req, res) => {
  const obj = fruits.find(item => item.id === Number(req.params.id) && item);

  res.send(obj.name)
});

router.post('/fruits', (req, res) => {
  const newFruit = {
    id: fruits.length + 1,
    name: req.body.name
  }
  fruits.push(newFruit);
  res.send(fruits);
})
