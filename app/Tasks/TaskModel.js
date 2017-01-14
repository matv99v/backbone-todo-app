module.exports = Backbone.Model.extend({
    defaults: {
        title    : '',
        completed: false,
        id: _.uniqueId()
    },

    switch: function() {
        this.set('completed', !this.get('completed'));
    }

});
