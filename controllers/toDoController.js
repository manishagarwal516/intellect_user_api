var toDoModel = require('./controllers/toDoModel');
var response = {};

var toDoController ={
    getToDoDetail : function(toDoId,res){
        toDoModel.getToDoDetail(toDoId, function(err, result){
            response.err = err;
            response.result = result;
            res(response);
        });
    },

    getSpecficUsersTodo : function(toDoId,res){
        toDoModel.getToDoDetail(toDoId, function(err, result){
            response.err = err;
            response.result = result;
            res(response);
        });
    }
}    
module.exports = toDoController;