var eventBus = {
    filterStateChanged   : 'filterStateChanged',
    taskCreated          : 'taskCreated',
    taskRemoved          : 'taskRemoved',
    taskCompletionChanged: 'taskCompletionChanged'
};

module.exports = _.extend(eventBus, Backbone.Events);
