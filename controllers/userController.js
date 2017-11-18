var userModel = require('./controllers/userModel');
var response = {};

var userController ={
    getUserDetail : function(userId,res){
        userModel.getUserDetail(userId, function(err, result){
            response.err = err;
            response.result = result;
             res(response);
        });
    },

    activeUsersTodo : function(userId,res){
        userModel.getActiveUsersTodo(userId, function(err, result){
            response.err = err;
            response.result = result;
            res(response);
        });
    }
}    
module.exports = userController;