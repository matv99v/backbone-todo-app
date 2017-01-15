const TaskModel = require('./TaskModel');
const HeaderView = require('../Header/HeaderView');

module.exports = Backbone.Collection.extend({
    model: TaskModel,

    initialize: function() {
        Backbone.pubSub.on('newTaskCreated', this.newTaskHandler, this);
    },

    newTaskHandler: function(newTaskName) {
        this.push({title: newTaskName});
    },

});
