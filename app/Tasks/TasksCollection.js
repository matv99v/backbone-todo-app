const TaskModel  = require('./TaskModel');
// const HeaderView = require('../Header/HeaderView');
const eventBus   = require('../Specials/eventBus');


module.exports = Backbone.Collection.extend({
    model: TaskModel,

    initialize: function() {
        eventBus.on(eventBus.taskCreated, this.taskAddHandler,    this);
        eventBus.on(eventBus.taskRemoved, this.taskRemoveHandler, this);
    },

    taskAddHandler: function(taskName) {
        var model = new TaskModel({title: taskName});
        if (model.isValid()) {
            this.push({title: taskName});
        } else {
            console.debug('Invalid task name')
        }
    },

    taskRemoveHandler: function(taskModel) {
        this.remove(taskModel);
    }

});
