	/* Convert hex-a to rgba and vice versa */

	/* This function takes a color value of either hex or rgb */
	function convertColor(color) {
		"use strict";

		var convertedColor;

		if (color[0] === '#') {

			convertedColor = convertHexToRgb(color);

		} else if (color[0] === '(') {

			convertedColor = convertRgbToHex(color);
		} else {

			return "Error ! \nPlease Enter A Proper Input. \nHex starts with an octothorpe and has 6 trailing numbers, rgb is enclosed in paranthesis and seperated with commas. ";
		}

		/* This function takes a hex color code and converts it to rgb. Value should be preceeded with
		an octothorpe like so: #ffffff */
		function convertHexToRgb(color) {
			var hexNumber = color.slice(1);
			var r = parseInt(hexNumber.substring(0, 2), 16);
			var g = parseInt(hexNumber.substring(2, 4), 16);
			var b = parseInt(hexNumber.substring(4, 6), 16);
			var a = hexNumber.length === 8 ? Math.round(parseInt(hexNumber.substring(6, 8), 16) / 255) : '';

			return (a !== '' ? 'rgba' : 'rgb') + "(" + r + "," + g + "," + b + (a !== '' ? ',' : '') + a + ")";
		}

		/* This function converts an rgb color code, and converts it to hex. Value should be wrapped in
		paranthesis like so: (255, 255, 255,)*/
		function convertRgbToHex(color) {
			color = color.slice(1, -1).split(',');
			var r = color[0];
			var g = color[1];
			var b = color[2];
			var a = color.length === 4 ? Math.round(color[3] * 255) : '';
			return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b) + (color.length === 4 ? numberToHex(a) : '');
		}

		/* This function converts a number from base 10 ( Decimal ) to base 16 ( Hexadecimal),
		and only takes an input of a decimal number. */
		function numberToHex(number) {
			var numberInHex = Number(number).toString(16);
			return numberInHex.length == 1 ? "0" + numberInHex : numberInHex;
		}

		return convertedColor;
	}