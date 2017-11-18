var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(result);
});

router.get('/:id', function(req, res, next) {
  userController.getUserDetail(req.params, function(result){
    res.send(result);
  });
  
});

router.get('/user/getactiveUsersTodo', function(req, res, next) {
  userController.getActiveUsersTodo(req, function(result){
    res.send(result);
  });
  
});

module.exports = router;
