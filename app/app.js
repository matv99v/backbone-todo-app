const HeaderView  = require('./Header/HeaderView');
const headerView = new HeaderView();
headerView.render();

const TasksView  = require('./Tasks/TasksView');
const tasksView = new TasksView();
tasksView.render();

const FooterView  = require('./Footer/FooterView');
const footerView = new FooterView();
footerView.render();

//
// const LayoutView  = require('./Layout/LayoutView');
//
// const layoutView = new LayoutView();
// layoutView.render();
