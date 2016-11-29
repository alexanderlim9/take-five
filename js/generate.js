
function setName() {
  var name = document.getElementById("nameInput").value;
  if(name === "") {
    Cookies.set('name', "Anonymous squirrel");
  }
  else {
    Cookies.set('name', document.getElementById("nameInput").value);
  }
    console.log(Cookies.get('name'));
}

if(Cookies.get('first') === undefined) {
  //setting the array
  var entries = ['Kara: I taste... MINTY FRESHNESS', 'Alex: I taste... coffee!', 'Noah: I hear... Subway workers talking'];
  var json_entries = JSON.stringify(entries);
  console.log("reset");
  Cookies.set('entries', json_entries);
  console.log(json_entries);
  console.log(Cookies.get('entries'));
}

Cookies.set('first', 'exist');
