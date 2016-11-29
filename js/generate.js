var entries = ['User saw: something fresh', 'User saw: something clean', 'User saw: something new'];
var json_entries = JSON.stringify(entries);

Cookies.set('entries', json_entries);

console.log(json_entries);
console.log(Cookies.get('entries'));
