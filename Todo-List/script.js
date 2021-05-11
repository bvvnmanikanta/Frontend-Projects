let list = document.getElementsByTagName("li");
let i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(i=0; i < close.length; i++){
    close[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
}

list = document.querySelector('ul');
list.addEventListener("click", (ev) => {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

document.getElementsByClassName("btn")[0].addEventListener("click", () => {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myinput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if( inputValue === "" ) {
        alert("Empty fields cannot be added");
    } else {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value = "";

    span = document.createElement("span");
    txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    close[close.length - 1].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    },false);
}, false);