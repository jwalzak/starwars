var base = 'http://swapi.co/api/';
function getJSON(url) {
    var resp;
    var xmlHttp;
    resp = '';
    xmlHttp = new XMLHttpRequest();
    if (xmlHttp !== null) {
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        resp = xmlHttp.responseText;
    }
    return resp;
} //end getJSON
var input = document.querySelector('.submit');
var val;
var data;
input.addEventListener('click', function (e) {
    e.preventDefault();
    val = document.querySelector('.input').value;
    data = getJSON(base + 'people/' + val + '/');
    console.log(data);
});
console.log(data);
