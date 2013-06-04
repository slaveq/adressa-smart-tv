/*global define*/
define([], function () {
	'use strict';
	var STP = {
			
	};

	STP.log = function(msg) {
		if (console.log) {
			console.log(msg);
		}
		else {
			alert(msg);
		}
	};


	return STP;
});



