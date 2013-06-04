/*global define*/
define(['stp'], function (STP) {
	'use strict';

	var widgetAPI,tvKey;

	try {
	 widgetAPI = new Common.API.Widget();
	 tvKey = new Common.API.TVKeyValue();
		
	}
	catch (e) {
		
	}
	window.Main =
	{

	};

	Main.onLoad = function()
	{
		STP.log('Main.onLoad');
		this.enableKeys();
		!widgetAPI || widgetAPI.sendReadyEvent();
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
				appRouter.navigate('category/home', {trigger:true});
				break;
			case tvKey.KEY_DOWN:
				STP.log("DOWN");
				appRouter.navigate('category/sport', {trigger:true});
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


	return Main;
});



