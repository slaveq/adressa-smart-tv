define([
	'models/list',
	'text!templates/list/main.html'
], function (ListModel, listMainTemplate) {
	/**
	 * ListMainView class
	 * @type {[type]}
	 */
	var ListMainView = Backbone.View.extend({
		el : ".main-content",
        initialize : function() {
        	var that = this;

    		this.model = new ListModel({
    			id : 'sport'
    		});

    		this.model.fetch().done(function(){
    			that.render();
    		}).fail(function(){
    			// todo
    		});
    		
        },
        render: function () {
			// compiledTemplate with data, we pass to it this.model (Team model)
			// console.log(this.model.toJSON());
			console.log(this.model.toJSON());
			var compiledTemplate = _.template(listMainTemplate, {
				'model' : this.model.toJSON()
			});
			// this.el is a container element, which we defined in el attribute
			$(this.el).html(compiledTemplate);

			return this;
        },
        destroy: function () {
			$(this.el).html('');
        }
    });

	return ListMainView;
});