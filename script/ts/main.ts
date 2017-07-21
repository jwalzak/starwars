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

let input: any = document.querySelector('.submit');
let val: string;
let data: string;
let jsonData: object;
input.addEventListener('click', function(e: any){
  try {
    val = (<HTMLInputElement>document.querySelector('.input')).value;
    e.preventDefault();
    input.value = 'be with you';
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

function display(res: any) {
  let info: Element = document.createElement('p');
  try {
      let output: Element = document.querySelector('div#output');
      let rightDiv: Element = document.querySelector('div#rightDiv');
      output.innerHTML = '';
    for(let i = 0; i<res.results.length; i++) {
      let title: Element = document.createElement('h4');
      let info: Element = document.createElement('p');
      let birth: string = res.results[i].birth_year;
      let eye: string = res.results[i].eye_color;
      let gender: string = res.results[i].gender;
      let skin: string = res.results[i].skin_color;
      let mass: string = res.results[i].mass;
      let information: string = `<br />Gender: ${gender} <br /> Skin Colour: ${skin} <br /> Eye Colour: ${eye} <br />Mass: ${mass} <br /> Birth Date: ${birth} <br />`;
      // rightDiv.innerHTML += information;
      // title.setAttribute('class', 'name');
      let titleText: any = document.createTextNode(res.results[i].name);
      title.appendChild(titleText);
      output.appendChild(title);
      title.innerHTML += information;
    }
  } catch (err) {
    console.log(err);
  }
}
