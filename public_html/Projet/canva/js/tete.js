/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Visage(canvas, x, y, r, dx, dy) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx=dx;
    this.dy=dy;
    this.dessiner = function () {
        var ctx = this.canvas.getContext("2d");
        var yYeux = this.y - this.r * 0.20;
        var dxYeux = this.r * 0.3;
        // le cercle dÃ©limitant le Visage
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.strokeStyle = "coral";
        ctx.fillStyle = "bisque";
        ctx.fill();
        ctx.stroke();

        // la bouche
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 0.6, 0, Math.PI, false);
        ctx.strokeStyle = "red";
        ctx.stroke();

        // les yeux
        ctx.beginPath();
        ctx.strokeStyle = "#369";
        ctx.fillStyle = "#c00";
        ctx.arc(this.x + dxYeux, yYeux, this.r * 0.1, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x - dxYeux, yYeux, this.r * 0.1, 0, Math.PI * 2, false);
        ctx.stroke();
    };
    this.deplacer = function () {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < this.r || this.x > (this.canvas.width - this.r)) {
            this.dx = -this.dx;
        }
        if (this.y < this.r || this.y > (this.canvas.height - this.r)) {
            this.dy = -this.dy;
        }
    };
}
//
//    }
//}
function init() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var timerId = 0;
// cree les deux visages et les affiche
    var visage1 = new Visage(canvas, 250, 250, 50, 4, 2);
    var visage2 = new Visage(canvas, 120, 350, 30, -3, -2);
    visage1.dessiner();
    visage2.dessiner();

    document.getElementById("start").onclick =function animation_start() {


        timerId = setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            visage1.deplacer();
            visage1.dessiner();
            visage2.deplacer();
            visage2.dessiner();
        }, 16);
    }
    ;


    document.getElementById("stop").onclick =function stop() {
        clearInterval(timerId);
    }
    }
//function Visage(canvas, x, y, r, dx, dy) {
//    this.canvas = canvas;
//    this.x = x;
//    this.y = y;
//    this.r = r;
//    this.dx = dx;
//    this.dy = dy;
//}}
/**
 * dessine le visage.
 * d'apÃ¨rs http://www.alsacreations.com/tuto/lire/1512-introduction-canvas.html
 * @returns {undefined}
 */
//Visage.prototype.dessiner = function() {
//    var ctx = this.canvas.getContext("2d");
//    var yYeux = this.y - this.r * 0.20;
//    var dxYeux = this.r * 0.3;
//    // le cercle dÃ©limitant le Visage
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
//    ctx.strokeStyle = "coral";
//    ctx.fillStyle = "bisque";
//    ctx.fill();
//    ctx.stroke();
//
//    // la bouche
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.r * 0.6, 0, Math.PI, false);
//    ctx.strokeStyle = "red";
//    ctx.stroke();
//
//    // les yeux
//    ctx.beginPath();
//    ctx.strokeStyle = "#369";
//    ctx.fillStyle = "#c00";
//    ctx.arc(this.x + dxYeux, yYeux, this.r * 0.1, 0, Math.PI * 2, false);
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.arc(this.x - dxYeux, yYeux, this.r * 0.1, 0, Math.PI * 2, false);
//    ctx.stroke();
//};
//
//
//
//
//Visage.prototype.deplacer = function() {
//    this.x += this.dx;
//    this.y += this.dy;
//    if (this.x < this.r || this.x > (this.canvas.width - this.r)) {
//        this.dx = -this.dx;
//    }
//    if (this.y < this.r || this.y > (this.canvas.height - this.r)) {
//        this.dy = -this.dy;
//    }
//};
//function init() {
//
//    var timerId = 0;
//    var canvas = document.getElementById("myCanvas");
//    var ctxt = canvas.getContext("2d");
//
//    // cree les deux visages et les affiche
//    var visage1 = new Visage(canvas, 250, 250, 50, 4, 2);
//    var visage2 = new Visage(canvas, 120, 350, 30, -3, -2);
//    visage1.dessiner();
//    visage2.dessiner();
//
//    document.getElementById("start").onclick = function () {
//        document.getElementById("stop").disabled = false;
//        document.getElementById("start").disabled = true;
//        timerId = setInterval(function () {
//            ctxt.clearRect(0, 0, canvas.width, canvas.height);
//            visage1.deplacer();
//            visage1.dessiner();
//            visage2.deplacer();
//            visage2.dessiner();
//        }, 16);
//    };
//    document.getElementById("stop").onclick = function () {
//        document.getElementById("stop").disabled = true;
//        document.getElementById("start").disabled = false;
//        clearInterval(timerId);
//    };
//}