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
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.strokeStyle = this.coleurInterne;
        ctx.fillStyle = this.coleurExterne;
        ctx.fill();
        ctx.stroke();
    }

}

function Tete(canvas, x, y, r, coleurInterne, coleurExterne) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = 0;
    this.coleurInterne = coleurInterne;
    this.coleurExterne = coleurExterne;
    this.dessiner = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.strokeStyle = this.coleurInterne;
        ctx.fillStyle = this.coleurExterne;
        ctx.fill();
        ctx.stroke();
    }

    this.devierCap = function (deltaC) {
        this.cap += deltaC;
    }
    this.deplacerSelonCap = function () {


        this.cap = Math.floor(Math.random() * (this.c + Math.PI / 12 - (this.c - Math.PI / 12) + 1)) + this.c - Math.PI / 12;
        this.x += this.r * Math.cos(this.cap);
        this.y += this.r * Math.sin(this.cap);
    }
    this.apOK = function (canvas) {
        this.ok = false;
        if (this.x <= this.r || this.x >= (this.canvas.width - this.r) || (this.y <= this.r || this.y >= (this.canvas.height - this.r))) {
            this.ok = true;
        }
        return this.ok;

    }
}


function Chenille(canvas, nbAnneaux, r) {
    this.canvas = canvas;
    this.nbAnneaux = nbAnneaux;
    this.r = r;
    this.tete = new Tete(canvas, canvas.width / 2, canvas.height / 2, this.r, "red", "black");
    this.tab = new Array(this.nbAnneaux);
    for (var i = 0; i < this.tab.length; i++) {
        this.tab[i] = new Anneaux(canvas, canvas.width / 2 - (this.r + i * this.r), canvas.height / 2, this.r, "black", "red");
    }
    ;
    this.dessiner = function () {
        this.tete.dessiner();
        for (var i = 0; i < this.tab.length; i++) {
            this.tab[i].dessiner();
        }
    }
    this.deplacer = function () {
        while (this.tete.apOK(canvas)) {

            this.tete.devierCap(Math.PI / 6);

            this.tete.x += this.tete.r * Math.cos(this.tete.cap);
            this.tete.y += this.tete.r * Math.sin(this.tete.cap);
            this.tete.c = this.tete.cap;
        }
        for (var i = this.tab.length - 1; i > 0; i--) {
            this.tab[i].x = this.tab[i - 1].x;
            this.tab[i].y = this.tab[i - 1].y;
        }
        this.tab[0].x = this.tete.x;
        this.tab[0].y = this.tete.y;
        this.tete.deplacerSelonCap();
    }
}


function init() {


    var canvas = document.getElementById("myCanvas");
    var ctxt = canvas.getContext("2d");
    var chenille1 = new Chenille(canvas, 10, 30);
    var chenille2 = new Chenille(canvas, 10, 30);
    chenille1.dessiner();
    chenille2.dessiner();


    // association au bouton Start d'un traitement qui lance l'animation
    document.getElementById("startBtn").onclick = function () {
        // change l'état des boutons Start et Stop
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("startBtn").disabled = true;
        // création d'un timer qui toutes les 20 milisecondes déplace et
        // réaffiche les chenilles
        timerId = setInterval(function () {
            // la fonction invoquée périodiquement (toutes les 20 ms) par le timer
            ctxt.clearRect(0, 0, canvas.width, canvas.height);
            chenille1.deplacer();
            chenille2.deplacer();
            chenille1.dessiner();
            chenille2.dessiner();

        }, 60);
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









