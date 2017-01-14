const HeaderModel    = require('./HeaderModel.js');
const HeaderTemplate = require('./HeaderTemplate.html');
require('./HeaderStyles.scss');

var HeaderView = Backbone.View.extend({
    el: '#app',

    model: new HeaderModel(),

    template: _.template(HeaderTemplate),

    render: function() {
       this.$el.append( this.template(this.model.attributes) );
       return this;
   },
});


module.exports = HeaderView;
