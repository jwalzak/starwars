let base: string = 'https://swapi.co/api/';

function getJSON(url) {
  let resp: any;
  let xmlHttp: any;

  resp = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp !== null) {
    xmlHttp.open("GET", url, true);
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
    console.log(data);
    e.preventDefault();
    return data;
  }
  catch(err) {
    console.log(err);
  }
});

data = getJSON(`http://swapi.co/api/people/2/`);
data = JSON.parse(data);
console.log(data);
