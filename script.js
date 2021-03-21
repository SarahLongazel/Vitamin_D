// script for drag and drop quiz
// function onDrop(event) {
//     const answer = event.dataTransfer.getData("text/plain");
//     event.target.textContent = answer;
//     event.preventDefault();
// }

const dragged;
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function(event) {
    dragged = event.target;
}, false);

document.addEventListener("drop", function( event ) {
    event.preventDefault();
    
    if (event.target.className == "answer-dropbox") {
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
}, false);