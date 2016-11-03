/*
 * Script définissant permettant l'animation d'objets 'Visage' à l'intérieur
 * d'un canvas.
 * 
 *  Philippe Genoud - UFRIM2AG - nov. 2015 
 */

/**
 * Constructeur pour des objets Visage
 * @param {type} canvas le canvas dans lequel le visage se déplace
 * @param {type} x abscisse du centre du visage
 * @param {type} y ordonnée du centre du visage
 * @param {type} r rayon du visage
 * @param {type} dx déplacement horizontal élémentaire du visage 
 * @param {type} dy déplacement vertical élémentaire du visage
 * @returns {Visage}
 */
function Anneaux(canvas, x, y, r, coleurInterne, coleurExterne) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.r = r;
    this.coleurInterne = coleurInterne;
    this.coleurExterne = coleurExterne;
    this.dessiner = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.strokeStyle = this.coleurInterne;
        ctx.fillStyle = this.coleurExterne;
        ctx.fill();
        ctx.stroke();
    }
    this.prototype.placerA = function (px, py) {
        this.x = px;
        this.y = py;
    }
}
function Tete(canvas, x, y, r, coleurInterne, coleurExterne) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.r = r;
    this.coleurInterne = coleurInterne;
    this.coleurExterne = coleurExterne;
    this.dessiner = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.strokeStyle = this.coleurInterne;
        ctx.fillStyle = this.coleurExterne;
        ctx.fill();
        ctx.stroke();
    }
    this.prototype.placerA = function (px, py) {
        this.x = px;
        this.y = py;
    }
    this.devierCap = function (deltaC) {
        this.deltaC = deltaC;
    }
    this.deplacerSelonCap = function () {
//        x' = x + R * cos(cap) et y' = y + R * sin(cap)
        var cap = Math.floor((Math.random() * Math.PI / 6) + (-Math.PI / 6));
        this.x = x + this.r * Math.cos(cap);
        this.y = y + this.r * Math.sin(cap);
    }
    this.apOK = function (canvas) {
        if (this.x < this.r || this.x > (this.canvas.width - this.r) || (this.y < this.r || this.y > (this.canvas.height - this.r))) {
            return true;
        }

    }

}

function Chenille(canvas, nbAnneaux, r) {
    this.canvas = canvas;
    this.nbAnneaux = nbAnneaux;
    this.r = r;
    this.tete = new Tete(canvas, canvas.width / 2, canvas.height / 2, this.r, "red", "red");
    this.tab = new Array(this.nbAnneaux);
    for (var i = 0; i < this.tab.length; i++) {
        this.tab[i] = new Anneaux(canvas, canvas.width / 2 - (this.r + i * this.r), canvas.height / 2, this.r, "red", "red");
    }
    this.dessiner = function () {
        this.tete.dessiner();
        for (var i = 0; i < this.tab.length; i++) {
            this.tab[i].dessiner();
        }
    }
    this.deplacer = function () {
        while (tete.apOK(canvas)) {
            tete.devierCap(Math.PI / 10);
        }

        for (var i = 0; i < this.tab.length; i++) {
            this.tab[this.tab.length - i - 1].this.x = this.tab[this.tab.length - i].this.x;
            this.tab[this.tab.length - i - 1].this.y = this.tab[this.tab.length - i].this.y;
        }
        this.tab[0].this.x = tete.this.x;
        this.tab[0].this.y = tete.this.y;
        tete.deplacerSelonCap();
    }
}


function init() {

    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    var chenille1 = new Chenille(canvas, 8, 30);
    chenille1.dessiner();


    // association au bouton Start d'un traitement qui lance l'animation
    document.getElementById("startBtn").onclick = function () {
        // change l'état des boutons Start et Stop
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("startBtn").disabled = true;
        // création d'un timer qui toutes les 20 milisecondes déplace et
        // réaffiche les chenilles
        timerId = setInterval(function () {
            // la fonction invoquée périodiquement (toutes les 20 ms) par le timer
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chenille1.deplacer();
            chenille1.dessiner();
            
        }, 20);
    };

    // association au bouton Stop d'un traitement qui interrompt l'animation
    document.getElementById("stopBtn").onclick = function () {
        // change l'état des boutons Start et Stop
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("startBtn").disabled = false;
        // interruption du timer
        clearInterval(timerId);
    };

}









