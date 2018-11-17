'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// // Router.HistoryLocation allows us to get rid of HashURLs, you still need to configure your DB for it.
// Router.run(routes, Router.HistoryLocation, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'));
// });
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
