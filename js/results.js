
var json_entries = Cookies.get('entries');
console.log(json_entries);
var entries = JSON.parse(json_entries);

var data='';

data+='<div><ul>';
for (var i=1; i<=entries.length - 1; i++) {
    data+='<li>'+entries[i]+'</li>';
}
data+='</ul></div>'

document.getElementById("results").innerHTML += data;