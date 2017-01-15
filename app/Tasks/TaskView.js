const TaskModel = require('./TaskModel');
require('./Task.scss');

var TaskView = Backbone.View.extend({
    className: 'single-task',

    attributes: function() {
        return {'data-cid': this.model.cid};
    },

    template: _.template( require('./TaskTemplate.html') ),

    initialize: function() {
        var self = this;
        this.listenTo(this.model, 'change:completed', this.render);
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
