/* Script to open and close sidebar */
const openers = document.getElementById("openbtn");
let opened = false;

openers.addEventListener("click", function() {
    check();
});

function check() {
    if (!opened) {
        openNav();
        opened = true;
    } else {
        closeNav();
        opened = false;
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const tema1 = document.getElementById("tem1")
const tema2 = document.getElementById("tem2")
const tema3 = document.getElementById("tem3")

function tem(){
    
}