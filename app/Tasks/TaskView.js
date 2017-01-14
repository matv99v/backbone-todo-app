const TaskModel = require('./TaskModel');
require('./Task.scss');

var TaskView = Backbone.View.extend({
    className: 'single-task task-title',

    attributes: function() {
        return {'data-id': this.model.id};
    },

    template: _.template( require('./TaskTemplate.html') ),

    initialize: function() {
        var self = this;
        this.listenTo(this.model, 'change:completed', function() {
            self.$el.toggleClass('task-done');
        });
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    }

});


module.exports = TaskView;
