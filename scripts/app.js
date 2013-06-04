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
], function(Main, ListMainView) {
	$(document).ready(function() {
		Main.onLoad();
		// var appRouter = new AppRouter();
		var listMainView = new ListMainView();
	});
});