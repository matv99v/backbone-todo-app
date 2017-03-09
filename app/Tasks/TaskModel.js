module.exports = Backbone.Model.extend({
    defaults: {
        title    : '',
        completed: false
    },

    initialize: function() {
        this.on("invalid", function(model, error) {
            alert(model.get("title") + " " + error);
        });
    },

    switch: function() {
        this.set('completed', !this.get('completed'));
    },

    validate: function(attrs, options) {
        if (!attrs.title.length) {
           return "Task should have name!";
        }
    }

});
