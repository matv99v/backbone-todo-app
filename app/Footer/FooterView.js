const FooterModel    = require('./FooterModel.js');
const FooterTemplate = require('./FooterTemplate.html');
require('./FooterStyles.scss');

var FooterView = Backbone.View.extend({
    el: '#app',

    model: new FooterModel(),

    events: {
        'click [class|="filter"]' : 'updateFilterViewState',
    },

    template: _.template(FooterTemplate),

    render: function() {
       this.$el.append( this.template(this.model.attributes) );
       return this;
    },

    updateFilterViewState: function(e) {
        var filterState = e.target.getAttribute('data-filter-state')
        this.model.set('filterState', +filterState);
        this.render();
    }
});


module.exports = FooterView;
