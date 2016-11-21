//------------------------------------------------------------------------------
// Constructeur d'une Tortue Logo
//------------------------------------------------------------------------------
/**
 * Constructeur d'une tortue LOGO
 * @param {object} canvas : L'objet Canvas dans lequel la tortue dessine
 * @returns {Tortue}
 */
function Tortue(canvas) {
    this.canvas = canvas;
    this.reset();
}
/**
 * remet la tortue dans son état inital
 * cap 0°, placée au centre du canvas en position haute
 * @returns {undefined}
 */
Tortue.prototype.reset = function() {
    this.dessin = [];
    this.cap = 0;
    this.x = Math.round(this.canvas.width / 2);
    this.y = Math.round(this.canvas.height / 2);
    this.haute = true;
    this.dessiner();
};
//-- méthodes ------------------------------------------------------------------

/**
 * Dessine la tortue
 * @returns {undefined}
 */
Tortue.prototype.dessiner = function() {
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // sauvegarde du contexte graphique
    ctx.save();
    // definition de la transformation géométrique positionnant la tortue
    ctx.translate(this.x, this.y);
    ctx.rotate(this.cap * Math.PI / 180);
    // definition du triangle matérialisant la tortue.
    // les coordonnées du tracé de la tortue sont exprimées en centrant
    // la tortue en 0, 0 et on l'orientant horizontalement vers la droite
    // ces coordonnées subiront la translation et rotation précédentes au
    // moment de l'affichage
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-8, 10);
    ctx.lineTo(-8, -10);
    ctx.closePath();
    // définition de la couleur de remplissage et de la couleur du trait
    ctx.fillStyle = "#66ff66";
    if (this.haute) {
        ctx.strokeStyle = "green";
    } else {
        ctx.strokeStyle = "red";
    }
    ctx.lineWidth = 3;
    // remplisage et tracé du contour du triangle
    ctx.fill();
    ctx.stroke();
    // définition du cercle matérialisant la position de la tortue
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    // définition de la couleur de remplissage
    ctx.fillStyle = "black";
    // remplissage du cercle
    ctx.fill();
    // restoration du contexte graphique dans son état initial
    ctx.restore();

    this.dessinerTrace();
    this.afficherEtat();
};

Tortue.prototype.dessinerTrace = function() {
    var ctx = this.canvas.getContext('2d');
    for (var i = 0; i < this.dessin.length; i++) {
        if (this.dessin[i].action === 'B') {
            ctx.beginPath();
            ctx.moveTo(this.dessin[i].x, this.dessin[i].y);
        } else if (this.dessin[i].action === 'A') {
            ctx.lineTo(this.dessin[i].x, this.dessin[i].y);
        } else {   // lever
            ctx.stroke();
        }
    }
    ctx.stroke();
};

/**
 * fait avancer la tortue d'une distance donnée dans la direction indiquée
 * par son cap.
 * @param {type} distance : la distance de laquelle la tortue doit se deplacer
 * @returns {undefined}
 */
Tortue.prototype.avancer = function(distance) {
    // Attention, les fonctions sinus et consinus prennent comme paramètre
    // des valeurs en radians. Le cap exprimé en degrés doit donc être 
    // converti en radians.
    this.x = Math.round(this.x + distance * Math.cos(Math.PI * this.cap / 180));
    this.y = Math.round(this.y + distance * Math.sin(Math.PI * this.cap / 180));
    if (!this.haute) {
        this.dessin.push({action: 'A', x: this.x, y: this.y});
    }
    this.dessiner();
};

Tortue.prototype.tournerGauche = function(deltaCap) {
    this.cap -= deltaCap;
    this.dessiner();
};

Tortue.prototype.tournerDroite = function(deltaCap) {
    this.cap += deltaCap;
    this.dessiner();
};

Tortue.prototype.changerPositionEcriture = function() {
    if (this.haute) {
        this.dessin.push({action: 'B', x: this.x, y: this.y});
        // this.dessin[this.dessin.length()] = { action : 'B', x: this.x, y : this.y }
    } else {
        this.dessin.push({action: 'L'});
    }
    this.haute = !this.haute;
    this.dessiner();
};

Tortue.prototype.allerA = function(x, y, cap) {
    this.x = x;
    this.y = y;
    this.cap = cap;
    if (!this.haute) {
        this.dessin.push({action: 'A', x: this.x, y: this.y});
    }
    this.dessiner();
};

Tortue.prototype.afficherEtat = function() {
    // affiche le message la position et l'état de la tortue dans la zone message
    document.getElementById("message").innerHTML =
            'La tortue est en(' + this.x + ',' + this.y + ') en position ' + ((this.haute) ? 'levée' : 'baissée');
};

function init() {

    var canvas = document.getElementById("myCanvas");

    // création et affichage de la tortue dans sa position initiale 
    var tortue = new Tortue(canvas);

    document.getElementById("etatTortueBtn").onclick = function() {
        if (tortue.haute) {
            document.getElementById("etatTortueBtn").innerHTML = "Lever";
        }
        else {
            document.getElementById("etatTortueBtn").innerHTML = "Baisser";
        }
        tortue.changerPositionEcriture();

    };

    document.getElementById("resetBtn").onclick = function() {
        tortue.reset();
        document.getElementById("etatTortueBtn").innerHTML = "Baisser";
    };

    document.getElementById("avancerBtn").onclick = function() {
        tortue.avancer(parseInt(document.getElementById("distance").value));
    };

    document.getElementById("tournerGBtn").onclick = function() {
        tortue.tournerGauche(parseInt(document.getElementById("angle").value));
    };
    document.getElementById("tournerDBtn").onclick = function() {
        tortue.tournerDroite(45);
    };

    document.getElementById("allerABtn").onclick = function() {
        var x = parseInt(document.getElementById("newX").value);
        var y = parseInt(document.getElementById("newY").value);
        var newCap = parseInt(document.getElementById("newCap").value);
        tortue.allerA(x, y, newCap);
    };
}