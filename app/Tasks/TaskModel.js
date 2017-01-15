module.exports = Backbone.Model.extend({
    defaults: {
        title    : '',
        completed: false
    },

    switch: function() {
        this.set('completed', !this.get('completed'));
    }

});
