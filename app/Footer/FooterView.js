const FooterModel    = require('./FooterModel.js');
const FooterTemplate = require('./FooterTemplate.html');
const tasksView      = require('../instances/tasksView');
const eventBus       = require('../Specials/eventBus');

require('./FooterStyles.scss');


var FooterView = Backbone.View.extend({
    el: '#app footer',

    initialize: function() {
        eventBus.on(eventBus.taskCreated, this.updateQuantity, this);
        eventBus.on(eventBus.taskRemoved, this.updateQuantity, this);

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
        var filterState = +e.target.getAttribute('data-filter-state')

        this.model.set({
            filterState: filterState,
            items      : this.setQuantity(filterState)
        });

        this.render();
        eventBus.trigger(eventBus.filterStateChanged, +filterState);
    },

    updateQuantity: function() {
        var filterState = this.model.get('filterState');

        this.model.set({
            'items': this.setQuantity(filterState)
        });
        this.render();
    },

    setQuantity(filterState) {
        switch (filterState) {
            case 0:
                return tasksView.collection.length;
            case 1:
                return tasksView.collection.where({completed: false}).length;
            case 2:
                return tasksView.collection.where({completed: true}).length;
        }
    }
});


module.exports = FooterView;
