
var json_entries = Cookies.get('entries');
console.log(json_entries);
var entries = JSON.parse(json_entries);

var data='';

data+='<div><ul>';

//All entries:
//for (var i=0; i<=entries.length - 1; i++) {
//5 random entries:
//for (var i=0; i<=5; i++) {
//  data+='<li>'+entries[Math.floor(Math.random() * entries.length)]+'</li>';
//}

//1 Entry from each sense
for (var i=0; i<=4; i++) {
  var len = entries[i].length;
  data+='<li>'+entries[i][Math.floor(Math.random() * (len))]+'</li>';
}
data+='</ul></div>'

document.getElementById("results").innerHTML += data;