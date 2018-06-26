document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	/* This is it the main script file for general scripts regarding the page */

	/* These are variables that will be needed later in the script */
	var inputField = document.getElementById('colorCode');
	var button = document.getElementById('convert');
	var output = document.getElementById('output');


	/* These are event listeners that call the getInput function when the user wants to submit the input */
	inputField.addEventListener('keypress', getInput);
	button.addEventListener('click', getInput);

/* This function checks if the user has input something, checks if the input is being submitted, then
calls the function that will output the result of the conversion */
	function getInput() {
		if ((event.keyCode === 13 || event.button === 0) && inputValueSpecified()) {
			if (inputValueSpecified()) {

				removePreviousOutputs();
				createOutputElement();
			}
		}
	}
	function inputValueSpecified() {
		if (inputField.value !== '') {
			return true;
		}

		return false;
	}

	function createOutputElement() {
		var outputElement = document.createElement('span');

		outputElement.textContent = 'The Color is: ' + convertColorInput();
		output.appendChild(outputElement);

		inputField.value = '';
	}

	function removePreviousOutputs() {
		while (output.lastChild) {
			output.removeChild(output.lastChild);
		}
	}

	function convertColorInput() {
		return convertColor(inputField.value);
	}

	function setBackgroundTo() {

	}
});