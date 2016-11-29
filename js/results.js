

var json_entries = Cookies.get('entries');
console.log(json_entries);
var entries = JSON.parse(json_entries);

var data='';

for (var i=1; i<=entries.length; i++) {
    data+='<div>'+entries[i]+'</div>';
}

document.getElementById("results").innerHTML += data;