var entries = [];

var userInput = document.getElementById("sense");

function addEntry() {
    entries.push(userInput.value);
    console.log(entries)
}