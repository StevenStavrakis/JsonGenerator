function BarNav(id, icon, label, route) {
  this.id = id;
  this.icon = icon;
  this.label = label;
  this.route = route;
}



function Tab(label, icon, sections) {
  this.label = label;
  this.icon = icon;
  this.sections = sections;
}


function Section(label, type, cols, rows, fields, colsSm, colsMd) {
  this.label = label;
  this.type = type;
  this.cols = cols;
  this.rows = rows;
  this.colsSm = colsSm;
  this.colsMd = colsMd;
  this.fields = fields;
}

function Field(label, name, type, cols, rows) {
  this.label = label;
  this.name = name;
  this.type = type;
  this.cols = cols;
  this.rows = rows;
}

while (document.getElementById("type") == "dropdown") {

}
let fieldsArray = [];

function setFocusToTextBox(){
  document.getElementById("label").focus();
  document.getElementById("label").select();
}

function copyToName() {
  document.getElementById("name").value = document.getElementById("label").value;
}

let section;
function secSubmitted() {
  if (typeof section !== 'object') {
    let theSecLabel = document.getElementById("secLabel").value;
    let theSecType = document.getElementById("secType").value;
    let theSecCols = document.getElementById("secCols").value;
    let theSecRows = document.getElementById("secRows").value;
    section = new Section(theSecLabel, theSecType, theSecCols, theSecRows, []);
    document.getElementById("sectionForm").style.display = "none";
  } else {
    window.alert("There is already a section");
  }
  setFocusToTextBox();
}

function submitted() {
  if (document.getElementById("name").value == "") {
    document.getElementById("name").value = document.getElementById("label").value;
  }
  let theLabel = document.getElementById("label").value;
  let theName = document.getElementById("name").value;
  let theType = document.getElementById("type").value;
  let theCols = document.getElementById("cols").value;
  let theRows = document.getElementById("rows").value;

  let field = new Field(theLabel, theName, theType, theCols, theRows);
  //field = JSON.stringify(field, undefined, 2);
  //field = JSON.parse(field);
  //field = `<p>${field}</p>`
  section.fields.push(field);
  setFocusToTextBox();
}



document.getElementById("submit").addEventListener("click", submitted);


function print() {
  document.getElementById("output").innerHTML = JSON.stringify(section);
}
