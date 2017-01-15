const HeaderModel    = require('./HeaderModel.js');
const HeaderTemplate = require('./HeaderTemplate.html');
require('./HeaderStyles.scss');

var HeaderView = Backbone.View.extend({
    el: '#app header',

    events: {
        'click #new-task-button': 'createTaskHandler'
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
        Backbone.pubSub.trigger('newTaskCreated', newTaskName);
    }
});


module.exports = HeaderView;
