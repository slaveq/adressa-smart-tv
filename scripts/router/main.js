/*global define*/
define([], function () {
	'use strict';

	/**
	 * Represents edition entity
	 * @type {[type]}
	 */
	var AppRouter = Backbone.Router.extend({
		routes: {
            "*actions": "defaultRoute" // matches http://example.com/#anything-here
        }
	});

	return AppRouter;
});