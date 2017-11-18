var appModel = require('./controllers/appModel');
var _ = reguire('underscore');

var userController ={
    getUserDetail : function(userId,res){
        var result;
        _.each(appModel.dummyData.users, function(key, user){
            if(user[id] === userId)
                result = appModel.dummyData.users[key];
        })
        res(null, result);
    },

    getActiveUsersTodo : function(userId,res){
        var activeUsers = [];
        var activeUsersToDoInfo = [];
        _.map(appModel.dummyData.users, function(user){
            if(user.isActive){
                activeUsers.push(user);
            }
        })
        _.each(appModel.dummyData.toDos, function(todo){
            _.map(activeUsers, function(key, user){
                if(todo.user_id = user.id){
                    activeUsersToDoInfo.push({
                        userInfo: user,
                        toDoInfo: todo 
                    })
                }
            });
        }),
        res(null, result);
    }
}    
module.exports = userController;