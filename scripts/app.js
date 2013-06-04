require.config({
	paths : {
		"jquery" : "libs/jquery",
		"underscore" : "libs/underscore",
		"backbone" : "libs/backbone"
	}
});

require([
	'main',
	'router/main'
], function(Main, AppRouter) {
	$(document).ready(function() {
		Main.onLoad();

		window.appRouter = new AppRouter();
		Backbone.history.start();

	});
});