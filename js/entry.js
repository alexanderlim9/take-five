
var json_entries = Cookies.get('entries');
console.log(json_entries);
var entries = JSON.parse(json_entries);

var userInput = document.getElementsByClassName("sense")[0];
var verb = document.getElementsByClassName("verb")[0];

function addSight(sense) {
    entries[0].push(Cookies.get('name') + " " + verb.textContent + " \"" + userInput.value + "\"");
    entries[5] = "0";
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries'));
}

function addSound(sense) {
    entries[1].push(Cookies.get('name') + " " + verb.textContent + " \"" + userInput.value + "\"");
    entries[5] = "1";
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries'));
}

function addTaste(sense) {
    entries[2].push(Cookies.get('name') + " " + verb.textContent + " \"" + userInput.value + "\"");
    entries[5] = "2";
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries')[2]);
}

function addTouch(sense) {
    entries[3].push(Cookies.get('name') + " " + verb.textContent + " \"" + userInput.value + "\"");
    entries[5] = "3";
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries'));
}

function addSmell(sense) {
    entries[4].push(Cookies.get('name') + " " + verb.textContent + " \"" + userInput.value + "\"");
    entries[5] = "4";
    var json_entries = JSON.stringify(entries);
    Cookies.set('entries', json_entries);
    console.log(Cookies.get('entries'));
}