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
		console.log(parseInt(keyCode));
		switch(parseInt(keyCode)) {
			case 38:
				STP.log("UP");
				var prevLi = $('.left-menu li.active').prev().children('a');
				console.log(prevLi.attr('id'));
				if(prevLi) {
					appRouter.navigate('category/' + prevLi.attr('id'), {trigger:true});
				}
				break;
			case 40:
				STP.log("DOWN");
				var nextLi = $('.left-menu li.active').next().children('a');
				if(nextLi) {
					appRouter.navigate('category/' + nextLi.attr('id'), {trigger:true});
				}
				break;
			case 37:
				var prevLi = $('.main-content div.thumbnail.selected').parent().prev();
				if(prevLi) {
					$('.main-content div.thumbnail.selected').removeClass('selected');
					prevLi.children('.thumbnail').addClass('selected');
				};
				break;
			case 39:
				var nextLi = $('.main-content div.thumbnail.selected').parent().next();
				if(nextLi) {
					$('.main-content div.thumbnail.selected').removeClass('selected');
					nextLi.children('.thumbnail').addClass('selected');
				};
				break;
			// case 13:
			// 	STP.log("DOWN");
			// 	var nextLi = $('.left-menu li.active').next().children('a');
			// 	if(nextLi) {
			// 		appRouter.navigate('category/' + nextLi.attr('id'), {trigger:true});
			// 	}
			// 	break;
		}
		switch(keyCode)
		{
			case tvKey.KEY_RETURN:
			case tvKey.KEY_PANEL_RETURN:
				STP.log("RETURN");
				widgetAPI.sendReturnEvent();
				break;
			case tvKey.KEY_LEFT:
				STP.log("LEFT");
				var prevLi = $('.main-content div.thumbnail.selected').parent().prev();
				if(prevLi) {
					$('.main-content div.thumbnail.selected').removeClass('selected');
					prevLi.children('.thumbnail').addClass('selected');
				};
				break;
			case tvKey.KEY_RIGHT:
				STP.log("RIGHT");
				var nextLi = $('.main-content div.thumbnail.selected').parent().next();
				if(nextLi) {
					$('.main-content div.thumbnail.selected').removeClass('selected');
					nextLi.children('.thumbnail').addClass('selected');
				};
				break;
			case tvKey.KEY_UP:
				STP.log("UP");
				var prevLi = $('.left-menu li.active').prev().children('a');
				console.log(prevLi.attr('id'));
				if(prevLi) {
					appRouter.navigate('category/' + prevLi.attr('id'), {trigger:true});
				}
				break;
			case tvKey.KEY_DOWN:
				STP.log("DOWN");
				var nextLi = $('.left-menu li.active').next().children('a');
				if(nextLi) {
					appRouter.navigate('category/' + nextLi.attr('id'), {trigger:true});
				}
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



