let base: string = 'https://swapi.co/api/';

function getJSON(url) {
  let resp: any;
  let xmlHttp: any;

  resp = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp !== null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    resp = xmlHttp.responseText;
  }

  return resp;
}//end getJSON

let input: Element = document.querySelector('.submit');
let val: string;
let data: string;
let jsonData: object;
input.addEventListener('click', function(e){
  try {
    val = (<HTMLInputElement>document.querySelector('.input')).value;
    e.preventDefault();
    data = getJSON(`http://swapi.co/api/people/?search=${val}`);
    data = JSON.parse(data);
    console.log(data);
    display(data);
  }
  catch(err) {
    console.log(err);
  }
});

console.log(data);

function display(res) {
  let info: Element = document.createElement('p');
  for(let i = 0; i<res.results.length; i++) {
    let title: Element = document.createElement('h4');
    title.setAttribute('class', 'name');
    let titleText: any= document.createTextNode(res.results[i].name);
    title.appendChild(titleText);
    let output: Element = document.querySelector('div#output');
    output.appendChild(title);
  }
}
