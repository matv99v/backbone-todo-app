const TasksCollection = require('./TasksCollection');
const TaskView = require('./TaskView');



module.exports = Backbone.View.extend({
     el: '.tasks-container',

     events: {
         'click .task-title' : 'taskCompletionHandler'
     },

     collection: new TasksCollection([
        //  {title: 'Learn Backbone'},
        //  {title: 'Pass backbone course on DataartEdu'},
        //  {title: 'Upload course code to GitHub'},
        //  {title: 'Ask Eugene to comment the code'},
        //  {title: 'Go to Mamamia restourant'},
        //  {title: 'Send a presents via Nova Poshta'},
        //  {title: 'Walk the dog'}
     ]),

     render: function() {
        this.$el.html('');
        this.collection.forEach( task => this.renderOne(task) );
    },

    renderOne: function(model) {
        var taskView = new TaskView({model: model});
        this.$el.append( taskView.render().$el );
    },

    taskCompletionHandler: function(e) {
        var clickedTask = this.collection.findWhere({title: e.target.innerText});
        clickedTask.switch();
    }

});
