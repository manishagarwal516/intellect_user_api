var express = require('express');
var router = express.Router();
var todoController = require('./controllers/todoController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(result);
});

router.get('/:id', function(req, res, next) {
  todoController.getToDetail(req.params, function(result){
    res.send(result);
  })
});

router.get('/specficUsersTodo', function(req, res, next) {
  todoController.getActiveUsersTodo(req, function(result){
    res.send(result);
  });
  
});

module.exports = router;
