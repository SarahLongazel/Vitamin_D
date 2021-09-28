//---------Toggle Side Menu------
function openMenu() {
    document.getElementById("hiddenmenu").style.width = "200px";
}

function closeMenu() {
    document.getElementById("hiddenmenu").style.width = "0";
}

// --------Floating Clouds Animation---------
var id = null;
function floatCloud() {
    var elem = document.getElementById("answer-dropbox");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 30);
    function frame() {
        if (pos == 200) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + '%';
        }
    }
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
        if(confirm("Incorrect, click 'ok' to reload page and try again.")) {
        window.location.reload();
        }
    
    }
}

