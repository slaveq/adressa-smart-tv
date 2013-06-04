require.config({
	paths : {
		"jquery" : "libs/jquery",
		"underscore" : "libs/underscore",
		"backbone" : "libs/backbone"
	}
});

require([
	'main',
	'views/list/main',
	'router/main'
], function(Main, ListMainView, AppRouter) {
	$(document).ready(function() {
		Main.onLoad();
		// var appRouter = new AppRouter();
		// appRouter.on('route:defaultRoute', function(actions) {
		// 	alert(actions);
		// })
		var listMainView = new ListMainView();

		Backbone.history.start();
	});
});