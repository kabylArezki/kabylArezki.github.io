
/**
 * Constructeur d'une tortue LOGO
 * @param {object} canvas : L'objet Canvas dans lequel la tortue dessine
 * @returns {Tortue}
 */
function Tortue(canvas) {
    this.canvas = canvas;
    this.reset();
    this.trace = new Array();

}
function Instruction() {
    this.action;
    this.x;
    this.y;
}
//-- m�thodes ------------------------------------------------------------------

/**
 * remet la tortue dans son �tat inital
 * cap 0�, plac�e au centre du canvas en position haute
 * @returns {undefined}
 */
Tortue.prototype.reset = function () {
    this.dessin = [];
    this.cap = 0;
    this.x = Math.round(this.canvas.width / 2);
    this.y = Math.round(this.canvas.height / 2);
    this.haute = true;
    this.dessiner();
};

/**
 * Dessine la tortue
 * @returns {undefined}
 */
Tortue.prototype.dessiner = function () {
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // sauvegarde du contexte graphique
    ctx.save();
    // definition de la transformation g�om�trique positionnant la tortue
    ctx.translate(this.x, this.y);
    ctx.rotate(this.cap * Math.PI / 180);
    // definition du triangle mat�rialisant la tortue.
    // les coordonn�es du trac� de la tortue sont exprim�es en centrant
    // la tortue en 0, 0 et on l'orientant horizontalement vers la droite
    // ces coordonn�es subiront la translation et rotation pr�c�dentes au
    // moment de l'affichage
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-8, 10);
    ctx.lineTo(-8, -10);
    ctx.closePath();
    // d�finition de la couleur de remplissage et de la couleur du trait
    ctx.fillStyle = "#66ff66";
    if (this.haute) {
        ctx.strokeStyle = "green";
    } else {
        ctx.strokeStyle = "red";
    }
    ctx.lineWidth = 3;
    // remplisage et trac� du contour du triangle
    ctx.fill();
    ctx.stroke();
    // d�finition du cercle mat�rialisant la position de la tortue
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    // d�finition de la couleur de remplissage
    ctx.fillStyle = "black";
    // remplissage du cercle
    ctx.fill();
    // restoration du contexte graphique dans son �tat initial
    ctx.restore();
};

/**
 * fait avancer la tortue d'une distance donn�e dans la direction indiqu�e
 * par son cap.
 * @param {type} distance : la distance de laquelle la tortue doit se deplacer
 * @returns {undefined}
 */
Tortue.prototype.avancer = function (distance) {
    // Attention, les fonctions sinus et consinus prennent comme param�tre
    // des valeurs en radians. Le cap exprim� en degr�s doit donc �tre 
    // converti en radians.
    this.x = Math.round(this.x + distance * Math.cos(Math.PI * this.cap / 180));
    this.y = Math.round(this.y + distance * Math.sin(Math.PI * this.cap / 180));
    this.dessiner();
};
Tortue.prototype.tournerGauche = function (angle) {
    // Attention, les fonctions sinus et consinus prennent comme param�tre
    // des valeurs en radians. Le cap exprim� en degr�s doit donc �tre 
    // converti en radians.
    this.cap -= angle;
    this.dessiner();
};
Tortue.prototype.tournerDroite = function (angle) {
    // Attention, les fonctions sinus et consinus prennent comme param�tre
    // des valeurs en radians. Le cap exprim� en degr�s doit donc �tre 
    // converti en radians.
    this.cap += angle;
    this.dessiner();
};
Tortue.prototype.changerPositionEcritureB = function (position) {
    this.y -= position;
};
Tortue.prototype.changerPositionEcritureL = function (position) {
    this.y += position;
};

function init() {
    var canvas = document.getElementById("myCanvas");
    var totue = new Tortue(canvas);
    var ctxt = canvas.getContext('2d');
document.getElementById("position").innerHTML ="La tortue est dans la position  ( " + totue.x + " et " + totue.y + " )";



    document.getElementById("aller").onclick = function () {
        var CAP = parseFloat(document.getElementById("cap").value);
        totue.cap = CAP;
        var x = parseFloat(document.getElementById("x").value);
        totue.x = x;
        var y = parseFloat(document.getElementById("y").value);
        totue.y = y;
        document.getElementById("position").innerHTML = "La tortue est dans la position  ( " + totue.x + " et " + totue.y + " )";
        var a = new Instruction();
        a.action = "A";
        a.x = totue.x;
        a.y = totue.y;
        totue.trace.push(a);
        totue.dessiner();
    };

    document.getElementById("jouer").onclick = function () {
        for (i = 0; i < totue.trace.length; i++) {
            if (totue.trace[i].action == "A") {
                ctxt.lineTo(totue.trace[i].x, totue.trace[i].y);
            } else if (totue.trace[i].action == "B") {
                ctxt.beginPath();
                ctxt.moveTo(totue.trace[i].x, totue.trace[i].y);
            } else if (totue.trace[i] == "L") {
                ctxt.stroke();
            }
        }
    };
    totue.dessiner();

    document.getElementById("reset").onclick = function () {
        totue.reset();
        totue.trace.splice(0, totue.trace.length);
        document.getElementById("position").innerHTML = "La tortue est dans la position ( " + totue.x + " et " + totue.y + " )";
    };
    document.getElementById("debut").onclick = function () {
        document.getElementById("debut").disabled = true;
        document.getElementById("fin").disabled = false;

        var a = new Instruction();
        a.action = "B";
        a.x = totue.x;
        a.y = totue.y;
        totue.trace.push(a);
    };
    document.getElementById("fin").onclick = function () {
        document.getElementById("debut").disabled = false;
        document.getElementById("fin").disabled = true;
        var a = new Instruction();
        a.action = "L";
        totue.trace.push(a.action);
    };
    document.getElementById("avancer").onclick = function () {
        var d = parseFloat(document.getElementById("d").value);
        totue.avancer(d);
        var a = new Instruction();
        a.action = "A";
        a.x = totue.x;
        a.y = totue.y;
        totue.trace.push(a);
        document.getElementById("position").innerHTML = "La tortue est dans la position ( " + totue.x + " et " + totue.y + " )";
        totue.dessiner();
    };
    document.getElementById("tournerGauche").onclick = function () {
        var angle = parseFloat(document.getElementById("angle").value);
        document.getElementById("position").innerHTML = "La tortue est dans la position ( " + totue.x + " et " + totue.y + " )";

        totue.tournerGauche(angle);
    };
    document.getElementById("tournerDroite").onclick = function () {
        var angle = parseFloat(document.getElementById("angle").value);
        document.getElementById("position").innerHTML = "La tortue est dans la position  ( " + totue.x + " et " + totue.y + " )";

        totue.tournerDroite(angle);
    };
    document.getElementById("lever").onclick = function () {
        var c = document.getElementById("lever").value;

        if (c =="Lever") {
            document.getElementById("lever").value = "Baisser";
            var b = parseFloat(document.getElementById("b").value);
            totue.changerPositionEcritureB(b);
            totue.haute = true;
            var a = new Instruction();
            a.action = "A";
            a.x = totue.x;
            a.y = totue.y;
            totue.trace.push(a);
            document.getElementById("position").innerHTML = "La tortue est dans la position  ( " + totue.x + " et " + totue.y + " )";

            totue.dessiner();
        } else {
            document.getElementById("lever").value = "Lever";
            var l = parseFloat(document.getElementById("l").value);
            totue.changerPositionEcritureL(l);
            totue.haute = false;
            var a = new Instruction();
            a.action = "A";
            a.x = totue.x;
            a.y = totue.y;
            totue.trace.push(a);

            document.getElementById("position").innerHTML = "La tortue est dans la position  ( " + totue.x + " et " + totue.y + " )";

            totue.dessiner();
        }
    };



}


    