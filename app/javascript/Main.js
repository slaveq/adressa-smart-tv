var widgetAPI,tvKey;

try {
 widgetAPI = new Common.API.Widget();
 tvKey = new Common.API.TVKeyValue();
	
}
catch (e) {
	
}
var STP = {
		
};

STP.log = function(msg) {
	if (console.log) {
		console.log(msg);
	}
	else {
		STP.log(msg);
	}
};

var ListView = Backbone.View.extend({
	el : '#main',
	

	temp : $('#template'),
	
	initialize : function(){
		_.bindAll(this, "render");

		this.render();
	},
	
	render : function(){
		STP.log("RENDER: " + this.temp);
		var t = _.template(this.temp.html());
		STP.log(t);
		$('#main').append(t({name : "nazwa"}));
	}
});

var Main =
{

};

Main.onLoad = function()
{
	// Enable key event processing
	STP.log("onLoad");
	this.enableKeys();
	!widgetAPI || widgetAPI.sendReadyEvent();
	
	STP.log("backbone init");
	list = new ListView();
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	STP.log("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			STP.log("RETURN");
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			STP.log("LEFT");
			break;
		case tvKey.KEY_RIGHT:
			STP.log("RIGHT");
			break;
		case tvKey.KEY_UP:
			STP.log("UP");
			break;
		case tvKey.KEY_DOWN:
			STP.log("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			STP.log("ENTER");
			break;
		case 262: 
			STP.log("MENU");
			list = new ListView();
			break;
		default:
			STP.log("Unhandled key");
			break;
	}
};


$(document).ready(function() {
	Main.onLoad();
});
