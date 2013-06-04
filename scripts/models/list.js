/*global define*/
define([], function () {
	'use strict';

	/**
	 * Represents edition entity
	 * @type {[type]}
	 */
	var List = Backbone.Model.extend({
		urlRoot: 'mocks/',
        // override backbone synch to force a jsonp call
		// sync: function (method, model, options) {

  //           options.dataType = 'jsonp';
  //           options.timeout = 10000;
  //           options.cache = true;
  //           options.jsonpCallback = 'testsData_' + this.get("id");

  //           return Backbone.sync(method, model, options);
  //       },
		parse: function (response) {
			// parse can be invoked for fetch and save, in case of save it can be undefined so check before using 
			if (response) {
				// here you write code to parse the model data returned and return it as a js object 
				// of attributeName: attributeValue
				// var data = response.collection;
				return response;
			}
		}
	});

	return List;
});