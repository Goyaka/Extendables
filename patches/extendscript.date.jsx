﻿var __timer__ = {
	'set': function () {
		this.start = new Date();
	}, 
	'get': function (format) {
		var duration = new Date().getTime() - this.start.getTime();
		if (format == 's') {
			return (duration/1000).toFixed(2);
		} else {
			return duration;
		}
	}
}

/**
 * @desc A simple timer. Makes it easy to know how long it takes to execute something. Exists as both a static method on ``Date`` 
 * and a regular method on each ``Function`` object.
 * @param {String} format Choose whether the elapsed time should be formatted in milliseconds (``ms`` or no argument) or 
 * seconds, rounded to two decimals (``s``).
 * @default ``ms``
 */

Date.timer = __timer__;
Function.prototype.timer = __timer__;