
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
  var sight = ['Kara saw "ARC"', 'Alex saw \"a girl with a periwinkle backpack\"', 'Christina saw \"an excited old man playing the violin!\"', 'Noah saw \"a student presenting and a teacher agressively discussing with him\"', 'Amanda saw \"reflections\"'];
  //@alexlim, please update the rest:
  var sound = ['Noah heard "Subway workers talking"', 'Noah heard "a subway wrapper crinkling down below"', 'Trevor heard "subway workers talking"', 'Sam heard "beep beep beep!"', 'Judy heard "CAMD students snoring in the studio"'];
  var taste = ['Kara tasted "MINTY FRESHNESS"', 'Alex tasted "coffee!"', 'Joe tasted "morning breath"', 'Farrah tasted "coffee in my throat"', 'Chloe tasted "the rainbow"'];
  var touch = ['Bobo felt "chills"', 'Farrah felt "COLD"', 'Noah felt "a cool breeze on my skin"', 'Alex felt "a cold handrail"', 'John Kane felt  "an impressive process book"'];
  var smell = ['Trevor smelled "subway sandwiches"', 'Julie smelled "a cup of joe"', 'Molly smelled "FOOD!"', 'Jon smelled "microwave popcorn"', 'Alice smelled "finals week in the air"'];
  var currentSense = "none";
    
  var entries = [sight, sound, taste, touch, smell, currentSense];
  
  var json_entries = JSON.stringify(entries);
  console.log("reset");
  Cookies.set('entries', json_entries);
  console.log(json_entries);
  console.log(Cookies.get('entries'));
}

Cookies.set('first', 'exist');
