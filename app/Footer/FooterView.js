const FooterModel    = require('./FooterModel.js');
const FooterTemplate = require('./FooterTemplate.html');
const tasksView      = require('../instances/tasksView');
require('./FooterStyles.scss');


var FooterView = Backbone.View.extend({
    el: '#app footer',

    initialize: function() {
        Backbone.pubSub.on('newTaskCreated', this.updateQuantity, this);
        this.model.set('items', tasksView.collection.where({completed: false}).length);
    },

    model: new FooterModel(),

    events: {
        'click [class|="filter"]' : 'updateFilterViewState',
    },

    template: _.template(FooterTemplate),

    render: function() {
        this.$el
            .html(this.template(this.model.attributes))
            .find('[data-filter-state|=' + this.model.get('filterState') + ']')
            .addClass('filter-selected');
       return this;
    },

    updateFilterViewState: function(e) {
        var filterState = e.target.getAttribute('data-filter-state')
        this.model.set('filterState', +filterState);
        this.render();
        Backbone.pubSub.trigger('filterStateChanged', +filterState);
    },

    updateQuantity: function() {
        this.model.set('items', tasksView.collection.where({completed: false}).length);
        this.render();
    }
});


module.exports = FooterView;
