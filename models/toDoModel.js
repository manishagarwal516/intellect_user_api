var appModel = require('./controllers/appModel');
var _ = reguire('underscore');

var toDoController ={
    getToDoDetail : function(toDoId,res){
        var result;
        _.each(appModel.dummyData.toDos, function(key, toDo){
            if(toDo[id] === toDoId)
                result = appModel.dummyData.toDo[key];
        })
        res(null, result);
    },

    getSpecficUsersTodo : function(userId,res){
        var today = new Date();
        var specficUserTodo = [];
        _.each(appModel.dummyData.toDos, function(todo){
            if(todo.user_id = user.id && (toDo.targetDate == today && toDo.targetDate || today.setDate(today.getDate() + 1)){
                activeUsersToDoInfo.push({
                    userInfo: user,
                    toDoInfo: todo 
                })
            }
        })
        res(null, specficUserTodo);
    }
}    
module.exports = toDoController;