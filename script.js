var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function len() {
  return input.value.length;
}

function createElement() {
  var li = document.createElement("li");
  li.classList.add("item");
  li.appendChild(document.createTextNode(input.value));
  var li2 = document.createElement("li");
  li2.classList.add("item1");
  li.appendChild(li2);
  var c = document.createElement("button");
  c.appendChild(document.createTextNode("✔"));
  c.classList.add("cros");
  li2.appendChild(c);
  var b = document.createElement("button");
  b.appendChild(document.createTextNode("❌"));
  b.classList.add("del");
  li2.appendChild(b);

  ul.appendChild(li);
  input.value = "";
  b.onclick = removeparnt;
  c.onclick = crossout;
}
function afterClick() {
  if (len() > 0) {
    createElement();
  }
}

function afterKeypress(event) {
  if (len() > 0 && event.keyCode === 13) {
    createElement();
  }
}

button.addEventListener("click", afterClick);

input.addEventListener("keypress", afterKeypress);

var item = document.getElementsByClassName("cros");
var noitems = item.length;

for (var i = 0; i < noitems; i++) {
  item[i].addEventListener("click", crossout);
}
var cross = document.getElementsByClassName("del");
var nocross = cross.length;

for (var i = 0; i < nocross; i++) {
  cross[i].addEventListener("click", removeparnt);
}
function removeparnt(event) {
  event.target.parentNode.parentNode.remove();
}
function crossout(event) {
  event.target.parentNode.parentNode.classList.toggle("done");
}
var bgcolor = document.querySelector("#colorid");
var nic = document.querySelector("#nid");
var body = document.querySelector("body");
bgcolor.addEventListener("input", function () {
  body.style.background = bgcolor.value;
  nic.style.color = bgcolor.value;
});
