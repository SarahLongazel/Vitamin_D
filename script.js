
function dragstart_handler(event) {
    event.dataTransfer.setData("text/plain", event.target.id);  
}

function dragover_handler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
}

function drop_handler(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));

}
const correctAns = event.dataTransfer.getData("answer3");
if (correctAns) {
    alert("Correct answer!");
} else {
    alert("Incorrect, please try again.");
}