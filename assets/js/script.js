document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	/* This is it the main script file for general scripts regarding the page */

	/* These are variables that will be needed later in the script */
	var inputField = document.getElementById('colorCode');
	var button = document.getElementById('convert');
	var output = document.getElementById('output');
	var body = document.getElementsByTagName('body')[0];
	var inputCache = '';

	/* These are event listeners that call the getInput function when the user wants to submit the input */
	inputField.addEventListener('keypress', getInput);
	button.addEventListener('click', getInput);

/* This function checks if the user has input something, checks if the input is being submitted, then
caches the input and calls the function that will output the result of the conversion */
	function getInput() {
		if (event.keyCode === 13 || event.button === 0) {
			if (inputValueSpecified()) {

				inputCache = inputField.value;

				setBackgroundToColor();
				removePreviousOutputs();
				createOutputElement();
			}
		}
	}

	/* Checks if the user has actually typed anything in the input field before submitting */
	function inputValueSpecified() {
		if (inputField.value !== '') {
			return true;
		}

		return false;
	}

	/* This function calls a function that converts the input and then creates and appends the
	output element */
	function createOutputElement() {
		var outputElement = document.createElement('span');

		outputElement.textContent = 'The Color is: ' + convertColorInput();
		output.appendChild(outputElement);

		inputField.value = '';
	}

	/* This function cleans up previous outputs to make sure older outputs don't stick around */
	function removePreviousOutputs() {
		while (output.lastChild) {
			output.removeChild(output.lastChild);
		}
	}

	/* This function converts the color code that the user inputs into the other color code format
	with auto detection for the inserted format. It also sets the input cache to always be in hex
	format for the background setting function. */
	function convertColorInput() {
		if (inputCache[0] === '#') {

			return convertColor(inputCache);
		}
		else {

			inputCache = convertColor(inputCache);
			return inputCache;
		}

	}

	/* This function changes the background to a gradient of the color being input and a complimentary
	color */
	function setBackgroundToColor() {
		body.style.backgroundImage = 'linear-gradient(' +
		 '90deg' + ', ' + inputCache + ', ' + shiftColor() + ')';
	}

	function shiftColor(){

	}
});