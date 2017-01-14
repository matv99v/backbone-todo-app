var LayoutModel = Backbone.Model.extend({
    defaults: {
        itemsLeft  : 0,
        filterState: 0 // there are three possible states: 0 - all, 1 - active, 2 - completed
    }
});



module.exports = LayoutModel;
