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
        input.value = 'be with you';
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
    try {
        var output = document.querySelector('div#output');
        var rightDiv = document.querySelector('div#rightDiv');
        output.innerHTML = '';
        for (var i = 0; i < res.results.length; i++) {
            var title = document.createElement('h4');
            var info_1 = document.createElement('p');
            var birth = res.results[i].birth_year;
            var eye = res.results[i].eye_color;
            var gender = res.results[i].gender;
            var skin = res.results[i].skin_color;
            var mass = res.results[i].mass;
            var information = "Gender: " + gender + " <br /> Skin Colour: " + skin + " <br /> Eye Colour: " + eye + " <br />Mass: " + mass + " <br /> Birth Date: " + birth + " <br />";
            rightDiv.innerHTML += information;
            title.setAttribute('class', 'name');
            var titleText = document.createTextNode(res.results[i].name);
            title.appendChild(titleText);
            output.appendChild(title);
        }
    }
    catch (err) {
        console.log(err);
    }
}
