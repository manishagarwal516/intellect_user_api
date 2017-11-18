var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todoController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(result);
});

router.get('/:id', function(req, res, next) {
  todoController.getToDoDetail(req.params, function(result){
    res.send(result);
  })
});

router.get('/:id/getSpecficUsersTodo', function(req, res, next) {
  todoController.getSpecficUsersTodo(req.params, function(result){
    res.send(result);
  });
  
});

module.exports = router;
