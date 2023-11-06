document.addEventListener("DOMContentLoaded", () => {
	// When submit button is clicked, get inputs and then validate them
	document.getElementById("submitBtn").addEventListener("click", submitHandler );  
	
	if (localStorage.getItem("recentInputs")) {
		document.getElementById("recentInputs").textContent = localStorage.getItem("recentInputs");
	}
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

function validateInputs(inputs) {
	if (inputs.cups === "") {
		return "You must enter a number of cups.";
	} else if (isNaN(inputs.cups)) {
		return "Cups must be a valid number.";
	}  else if (inputs.flavor === "") {
		return "You must choose a favorite flavor.";
	} else if (inputs.continent === "") {
		return "You must choose a continent.";
	}
	
	return "";
}

function submitHandler(e) {
	const validation = document.getElementById("validationDiv");
	validation.textContent = "";
	const inputs = getFormInputs();
	
	validateString = validateInputs(inputs)
	if (validateString !== "") {
		validation.textContent = validateString;
		return;
	} else {
		const inputJSON = JSON.stringify(inputs);
		console.log(inputJSON);
		localStorage.setItem("recentInputs", inputJSON);
		validation.textContent = "Submission successful.";
	}
	
	
}