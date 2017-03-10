const HeaderTemplate = require('./HeaderTemplate.html');
const eventBus       = require('../Specials/eventBus');

require('./HeaderStyles.scss');

var HeaderView = Backbone.View.extend({
    el: '#app header',

    events: {
        'click #new-task-button': 'createTaskHandler',
        'keydown'               : 'keyAction'

    },

    template: _.template(HeaderTemplate),

    render: function() {
       this.$el.append( this.template() );
       return this;
    },

    createTaskHandler: function() {
        var $input = this.$el.find('#new-task-input');
        var newTaskName = $input.val();
        $input.val('');
        eventBus.trigger(eventBus.taskCreated, newTaskName);
    },

    keyAction: function(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            this.createTaskHandler();
        }
    }

});


module.exports = HeaderView;
