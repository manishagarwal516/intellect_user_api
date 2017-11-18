var express = require('express');
var router = express.Router();
var userController = require('./controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(result);
});

router.get('/:id', function(req, res, next) {
  userController.getUserDetail(req.params, function(result){
    res.send(result);
  });
  
});

router.get('/activeUsersTodo', function(req, res, next) {
  userController.getActiveUsersTodo(req, function(err,res){
    res.send(result);
  });
  
});

module.exports = router;
