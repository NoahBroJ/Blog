function loadDoc(fromDest, toDest) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(toDest).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", fromDest, true);
  xhttp.send();
}

function initPage(){
    loadDoc();
    setInterval(loadDoc, 5000);
}

function changeHeight(item, height){
    var myDiv;
    myDiv = document.getElementById(item);
    myDiv.style.height = height;
    myDiv.style.marginBottom = "10px";
}

function killElement(theId) {
    var curElement = document.getElementById(theId);
    console.log(theId);
    curElement.style.backgroundColor = "green";
    console.log(curElement.parentElement.id);
    curElement.parentElement.removeChild(theId);
}