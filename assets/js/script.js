document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	/* This is it the main script file for general scripts regarding the page */

	var inputField = document.getElementById('colorCode');
	var button = document.getElementById('convert');
	var output = document.getElementById('output');


	inputField.addEventListener('keypress', getInput);
	button.addEventListener('click', getInput);

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

<<<<<<< HEAD
	function setBackgroundTo (){
=======
	function setBackgroundTo() {
>>>>>>> e05e8cf5445f822bd15c69df396c8707d90a75fc

	}
});