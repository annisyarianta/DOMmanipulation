document.title = "Latihan DOM"

function ubahWarna() {
    document.getElementById("btn").style.color = "white";
    document.getElementById("btn").style.backgroundColor = "#34A853";
}

function warnaAsli() {
    document.getElementById("btn").style.color = "black";
    document.getElementById("btn").style.backgroundColor = "#e8e8e8";
}

function sapaUser() {
    let yourName = document.getElementById("name").value;  
    document.getElementById("sapa").innerHTML = "Halo apa kabar, " + yourName;
}