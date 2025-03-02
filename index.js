function dice(){
    return Math.floor(Math.random()*6 + 1);
}
var p1 = dice();
var p2 = dice();


if(p1>p2) {
    document.querySelector("h1").textContent = "Player 1 Wins !";
    document.querySelector(".one .name").textContent = "🚩 Player 1 ";
}
else if(p1==p2) {
    document.querySelector("h1").textContent = "Draw !";
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins !";
    document.querySelector(".second .name").textContent = "🚩 Player 2 ";
}

var face1 = document.getElementById("face1").src = "./images/dice"+p1+".png";
var face2 = document.getElementById("face2").src = "./images/dice"+p2+".png";
