//---------Toggle Side Menu------
function openMenu() {
    document.getElementById("hiddenmenu").style.width = "200px";
}

function closeMenu() {
    document.getElementById("hiddenmenu").style.width = "0";
}

// --------Drag and Drop---------
function dragstart_handler(event) {
    event.dataTransfer.setData("text/plain", event.target.id);  
}

function dragover_handler(event) {
    event.preventDefault(); 
}

function drop_handler(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    answer = event.target.appendChild(document.getElementById(data));
    if (data === "answer3") {
        alert("Well done!");
        
    } else {
        alert("Incorrect, reload page and try again.");
        
    }
    
}

