const TasksCollection = require('./TasksCollection');
const TaskView        = require('./TaskView');
const eventBus        = require('../Specials/eventBus');
// const filterTasksHelper = require('../Specials/filterTasksHelper');


module.exports = Backbone.View.extend({
    el: '#app section',

    initialize: function() {
        var self = this;
        this.listenTo(this.collection, 'add remove', function() {
            self.filterStateChangedHandler(self.curFilterState);
        });
        eventBus.on(eventBus.filterStateChanged, this.filterStateChangedHandler, this);
    },

    events: {
        'click .task-title': 'taskCompletionHandler'
    },

    collection: new TasksCollection([
         {title: 'Learn Backbone'},
         {title: 'Pass backbone course on DataartEdu', completed: true},
         {title: 'Upload course code to GitHub'},
         {title: 'Ask Eugene to comment the code'},
         {title: 'Go to Mamamia restourant', completed: true},
         {title: 'Send a presents via Nova Poshta'},
         {title: 'Walk the dog'}
    ]),

    render: function(passedTasks) {
        var tasks = passedTasks ? passedTasks : this.collection;
        this.$el.html('');
        tasks.forEach( task => this.renderOne(task) );
    },

    renderOne: function(model) {
        var taskView = new TaskView({model: model});
        this.$el.append( taskView.render().$el );
    },

    taskCompletionHandler: function(e) {
        var el = $(e.target).closest("[data-cid]").attr('data-cid');
        var clickedTask = this.collection.findWhere({title: e.target.innerText});
        clickedTask.switch();
        this.filterStateChangedHandler(this.curFilterState);
    },

    filterStateChangedHandler: function(filterState) {
        this.curFilterState = filterState;
        switch (filterState) {
            case 0:
                this.render();
                break;

            case 1:
                var activeTasks = this.collection.where({completed: false});
                this.render(activeTasks);
                break;

            case 2:
                var completedTasks = this.collection.where({completed: true});
                this.render(completedTasks);
                break;
        }
    },

    curFilterState: 0

});
