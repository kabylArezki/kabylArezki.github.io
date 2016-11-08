/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function dessiner() {
    var h = parseFloat(document.getElementById("H").value);
    var nbr = parseFloat(document.getElementById("nbr").value);
    var ctx = document.getElementById("c").getContext("2d");
    for (var i = 0; i < nbr; i++) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, h * i, h * (i + 1), h);
        ctx.strokeStyle = "#ffffff";
        ctx.strokeRect(0, h * i, h * (i + 1), h);
    }
}

function effacer() {
    var h = parseFloat(document.getElementById("H").value);
    var nbr = parseFloat(document.getElementById("nbr").value);
    var ctx = document.getElementById("c").getContext("2d");
    for (var i = 0; i < nbr; i++) {
        ctx.clearRect(0, 0, 800, 800);
    }

}
function init() {

    document.getElementById("e").onclick = function () {
        effacer();
    };

    document.getElementById("d").onclick = function () {
        dessiner();
    };
}

