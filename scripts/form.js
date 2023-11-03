document.addEventListener("DOMContentLoaded", () => {
	// When submit button is clicked, get inputs and then validate them
	const validation = document.getElementById("validationDiv");
	
	document.getElementById("submitBtn").addEventListener("click", () => {
		inputs = getFormInputs();
		fieldsValid = validateInputs(inputs);
	});
});

// Grabs the values from the form fields. No validation is done at this point. 
function getFormInputs() {
	// Create an object and add each value from the form to it
	const inputs = {};
	inputs.cups = document.getElementById("number").value;
	inputs.flavor = document.getElementById("flavor").value;
	
	// Roll through the radio buttons to find the one that was selected.
	// Start with blank value to ensure one exists
	inputs.continent = "";
	continents = document.getElementsByClassName("continentRadio");
	for (i = 0; i < continents.length; i++) {
		if (continents[i].checked) {
			inputs.continent = continents[i].value;
		}
	}
	
	return inputs;
}

// Validates the form items. 
function validateInputs(inputs) {
	if (inputs.cups === "") {
		console.log("no cups entered");
	}
}