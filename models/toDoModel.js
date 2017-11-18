var appModel = require('./appModel.js');
var _ = require('underscore');

var toDoController ={
    getToDoDetail : function(toDoId,res){
        var result;
        _.each(appModel.dummyData.toDos, function(toDo, key){
            if(toDo.id === parseInt(toDoId['id']))
                result = appModel.dummyData.toDos[key];
        })
        res(null, result);
    },

    getSpecficUsersTodo : function(userIdParams,res){
        var toDoInfo = {};
        var today = new Date();
        var specficUserTodo = [];
        _.each(appModel.dummyData.toDos, function(todo){
            if(todo.user_id == userIdParams['id'] && (todo.targetDate == today && todo.targetDate || today.setDate(today.getDate() + 1))){
                toDoInfo = todo
            }
        })
        res(null, toDoInfo);
    }
}    
module.exports = toDoController;