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
        e.preventDefault();
        data = getJSON("http://swapi.co/api/people/?search=" + val);
        data = JSON.parse(data);
        console.log(data);
        display(data);
    }
    catch (err) {
        console.log(err);
    }
});
console.log(data);
function display(res) {
    var info = document.createElement('p');
    for (var i = 0; i < res.results.length; i++) {
        var title = document.createElement('h4');
        title.setAttribute('class', 'name');
        var titleText = document.createTextNode(res.results[i].name);
        title.appendChild(titleText);
        var output = document.querySelector('div#output');
        output.appendChild(title);
    }
}
