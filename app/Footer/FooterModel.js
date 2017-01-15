var tasksView = require('../instances/tasksView');

const FooterModel = Backbone.Model.extend({
    defaults: {
        items: tasksView.collection.length,
        filterState: 0
    }
});



module.exports = FooterModel;
