const TaskModel = require('./TaskModel');
const eventBus  = require('../Specials/eventBus');

require('./Task.scss');

var TaskView = Backbone.View.extend({
    className: 'single-task',

    attributes: function() {
        return {'data-cid': this.model.cid};
    },

    events: {
         'click .remove-task' : 'taskRemoveHandler',
    },

    template: _.template( require('./TaskTemplate.html') ),

    initialize: function() {
        var self = this;
        this.listenTo(this.model, 'change:completed', this.render);
    },

    taskRemoveHandler: function() {
        this.remove();
        eventBus.trigger(eventBus.taskRemoved, this.model);
    },

    render: function() {
        this.$el
            .html(this.template(this.model.attributes))
            .find('.task-title')
            .addClass(this.model.get('completed') ? 'task-done' : '');
        return this;
    }

});


module.exports = TaskView;
