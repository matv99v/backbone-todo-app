const LayoutModel    = require('./LayoutModel.js');
const LayoutTemplate = require('./LayoutTemplate.html');
require('./Layout.scss');

const TasksView      = require('../Task/TasksView');
const TaskModel      = require('../Task/TaskModel');

var LayoutView = Backbone.View.extend({
     el: '#app',

     events: {
         'click #new-task-button'  : 'newTaskButtonHandler',
         'click [class|="filter"]' : 'updateFilterViewState',
     },

     model: new LayoutModel(),

     template: _.template( require('./LayoutTemplate.html') ),

     render: function() {
        this.$el.html( this.template(this.model.attributes) );

        this.$el.find('[class|="filter"]')
                .eq( this.model.get('filterState') )
                .toggleClass('filter-selected');

        this.tasksView = new TasksView();
        this.tasksView.render();
        return this;
    },

    newTaskButtonHandler: function() {
        debugger;
        var $inputEl = this.$el.find('#new-task-input');
        var newTaskName = $inputEl.val();
        $inputEl.val('');

        var newTask = new TaskModel({title: newTaskName});
        this.tasksView.collection.push(newTask);
        this.tasksView.renderOne(newTask);

        this.model.set('itemsLeft', this.tasksView.collection.length);
        this.render();
    },

    updateFilterViewState: function(e) {
        var filterState = e.target.getAttribute('data-filter-state')
        this.model.set('filterState', +filterState);
        this.render();
    }

});


module.exports = LayoutView;
