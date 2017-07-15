let base: string = 'http://swapi.co/api/';

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
input.addEventListener('click', function(e){
  e.preventDefault();
  val = (<HTMLInputElement>document.querySelector('.input')).value;
  data = getJSON(base + 'people/' + val + '/');
  console.log(data);
});

console.log(data);
