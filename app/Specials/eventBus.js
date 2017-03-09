var eventBus = {
    filterStateChanged: 'filterStateChanged',
    taskCreated       : 'taskCreated',
    taskRemoved       : 'taskRemoved'
};

module.exports = _.extend(eventBus, Backbone.Events);
