const HeaderModel    = require('./HeaderModel.js');
const HeaderTemplate = require('./HeaderTemplate.html');
const eventBus       = require('../Specials/eventBus');

require('./HeaderStyles.scss');

var HeaderView = Backbone.View.extend({
    el: '#app header',

    events: {
        'click #new-task-button': 'createTaskHandler',
        'keydown'               : 'keyAction'

    },

    model: new HeaderModel(),

    template: _.template(HeaderTemplate),

    render: function() {
       this.$el.append( this.template(this.model.attributes) );
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
