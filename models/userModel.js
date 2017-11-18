var appModel = require('./appModel.js');
var _ = require('underscore');

var userController ={
    getUserDetail : function(userId,res){
        var result;
        _.each(appModel.dummyData.users, function(user, key){
            if(user.id === parseInt(userId.id)){
                result = appModel.dummyData.users[key];
            }
        })
        res(null, result);
    },

    getActiveUsersTodo : function(userId,res){
        var activeUsers = [];
        var activeUsersToDoInfo = [];
        _.map(appModel.dummyData.users, function(user){
            console.log(user);
            if(user.isActive === true){
                activeUsers.push(user);
            }
        })
        _.each(appModel.dummyData.toDos, function(todo){
            _.map(activeUsers, function(user, key){
                if(todo.user_id = user.id){
                    activeUsersToDoInfo.push({
                        userInfo: user,
                        toDoInfo: todo 
                    })
                }
            });
        });
        console.log(activeUsersToDoInfo);
        res(null, activeUsersToDoInfo);
    }
}    
module.exports = userController;