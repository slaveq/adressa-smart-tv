/*global define*/
define([
	'views/list/main'
], function (ListMainView) {
	'use strict';

	/**
	 * Represents edition entity
	 * @type {[type]}
	 */
	var AppRouter = Backbone.Router.extend({
		routes: {
            "category/:name": "categoryRoute",
            "*actions": "defaultRoute"
        },
        categoryRoute : function (name) {
        	var listMainView = new ListMainView({
        		id : name
        	});
        },
        defaultRoute : function() {
        	this.navigate('category/home', {trigger : true});
        }
	});

	return AppRouter;
});