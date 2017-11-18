var toDoModel = require('../models/toDoModel.js');
var response = {};

var toDoController ={
    getToDoDetail : function(toDoId,res){
        toDoModel.getToDoDetail(toDoId, function(err, result){
            response.err = err;
            response.result = result;
            res(response);
        });
    },

    getSpecficUsersTodo : function(userToId,res){
        toDoModel.getSpecficUsersTodo(userToId, function(err, result){
            response.err = err;
            response.result = result;
            res(response);
        });
    }
}    
module.exports = toDoController;