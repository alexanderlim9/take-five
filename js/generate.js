
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
  
  //setting the entry data arrays
  var sight = ['Kara saw "ARC"', 'Alex saw \"a girl with a periwinkle backpack\"', 'Noah saw \"an excited old man playing the violin!\"', 'Noah saw \"a student presenting and a teacher agressively discussing with him\"', 'Carl saw \"reflections\"'];
  //@alexlim, please update the rest:
  var sound = ['Noah: I hear... Subway workers talking', 'Noah: I hear... a subway wrapper crinkling down below', 'Trevor: I hear... subway workers talking', 'Sam: I hear... beep beep beep!'];
  var taste = ['Kara: I taste... MINTY FRESHNESS', 'Alex: I taste... coffee!', 'Joe: I taste... morning breath', 'Farrah: I taste... coffee in my throat'];
  var touch = ['Bobo: I feel... chills', 'Farrah: I feel... COLD', 'Noah: I feel... a cool breeze on my skin', 'Alex: I feel... a cold handrail'];
  var smell = ['Trevor: I smell... subway sandwiches', 'Alan: I smell... a cup of joe', 'Clint: I smell... FOOD!'];
  
  var entries = [sight, sound, taste, touch, smell];
  
  var json_entries = JSON.stringify(entries);
  console.log("reset");
  Cookies.set('entries', json_entries);
  console.log(json_entries);
  console.log(Cookies.get('entries'));
}

Cookies.set('first', 'exist');
