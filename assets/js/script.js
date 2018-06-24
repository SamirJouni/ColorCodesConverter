document.addEventListener('DOMContentLoaded', function () {
	"use strict";
/* This is it the main script file for general scripts regarding the page */

	var inputField = document.getElementById('colorCode');
	var button = document.getElementById('convert');
	var output = document.getElementById('output');

	inputField.addEventListener('keypress', getInput);
	button.addEventListener('click', getInput);

	function getInput(){
		if ((event.keyCode === 13 || event.button === 0) && inputValueSpecified()){
			console.log('seiko');
		}
	}
	function inputValueSpecified(){
		if (inputField.value !== ''){
			return true;
		}

		return false;
	}

});