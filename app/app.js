require('./app.scss');


const headerView = require('./instances/headerView');
headerView.render();

const tasksView = require('./instances/tasksView');
tasksView.render();

const footerView = require('./instances/footerView');
footerView.render();
