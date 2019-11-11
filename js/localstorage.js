let scoreRegistry = localStorage.getItem("puntuacion");


let stringifyToObject = JSON.parse(scoreRegistry);


document.getElementById("player1").appendChild(document.createTextNode(stringifyToObject.name));
document.getElementById("score1").appendChild(document.createTextNode( stringifyToObject.score));