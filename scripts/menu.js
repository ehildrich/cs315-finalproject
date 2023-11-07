document.addEventListener("DOMContentLoaded", () => {
	// When submit button is clicked, get inputs and then validate them
	document.getElementById("dropDown").addEventListener("click", dropDownHandler );
});

function dropDownHandler(e) {
	document.getElementById("dropDownContent").classList.toggle("close");
	document.getElementById("dropDownContent").classList.toggle("open");
}