const TasksCollection = require('./TasksCollection');
const TaskView = require('./TaskView');


module.exports = Backbone.View.extend({
    el: '#app section',

    initialize: function() {
        this.listenTo(this.collection, 'add', this.renderOne);
        Backbone.pubSub.on('filterStateChanged', this.filterStateChanged, this);
    },

    events: {
         'click .task-title' : 'taskCompletionHandler',
         'click .remove-task' : 'taskRemoveHandler',
    },

    collection: new TasksCollection([
         {title: 'Learn Backbone'},
         {title: 'Pass backbone course on DataartEdu'},
         {title: 'Upload course code to GitHub'},
        //  {title: 'Ask Eugene to comment the code'},
        //  {title: 'Go to Mamamia restourant'},
        //  {title: 'Send a presents via Nova Poshta'},
        //  {title: 'Walk the dog'}
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
        var clickedTask = this.collection.findWhere({title: e.target.innerText});
        clickedTask.switch();
    },

    taskRemoveHandler: function(e) {
        var cid = $(e.target).closest("[data-cid]").attr('data-cid');
        this.collection.remove(cid);
        this.render();
    },

    filterStateChanged: function(filterState) {
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
    }

});
