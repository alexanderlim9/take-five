
var json_entries = Cookies.get('entries');
console.log(json_entries);
var entries = JSON.parse(json_entries);

var userInput = document.getElementById("sense");
var verb = document.getElementById("verb");

function addEntry(sense) {
    entries.push(Cookies.get('name') + ": " + verb.textContent + " " + userInput.value);
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries'));
}