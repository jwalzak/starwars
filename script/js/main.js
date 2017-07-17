var base = 'https://swapi.co/api/';
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
var jsonData;
input.addEventListener('click', function (e) {
    try {
        val = document.querySelector('.input').value;
        console.log(data);
        e.preventDefault();
        return data;
    }
    catch (err) {
        console.log(err);
    }
});
data = getJSON("http://swapi.co/api/people/2/");
data = JSON.parse(data);
console.log(data);
