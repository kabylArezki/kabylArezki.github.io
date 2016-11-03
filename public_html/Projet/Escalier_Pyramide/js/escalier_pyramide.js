/*
 * variables globales
 */



/**
 * dessine un rectangle 
 * @param {type} x abscisse du coin supÃ©rieur gauche du rectangle
 * @param {type} y ordonnÃ©e du coin supÃ©rieur gauche du rectangle
 * @param {type} L longueur du rectangle
 * @param {type} H hauteur du rectangle
 * @param {string} couleurTrait la couleur du contour du rectangle
 * @param {string} couleurRemplissage la couleur de remplissage du rectangle
 */
function rectangle(x, y, L, H, couleurTrait, couleurRemplissage) {
    var canvas = document.getElementById("myCanvas");
    var graphicContext = canvas.getContext("2d");
    var couleurTrait = document.getElementById("trait").value;
    var couleurRemplissage = document.getElementById("remplissage").value;
    graphicContext.lineWidth = 3;
    graphicContext.strokeStyle = couleurTrait;
    graphicContext.fillStyle = couleurRemplissage;
    graphicContext.fillRect(x, y, L, H);
    graphicContext.strokeRect(x, y, L, H);
}

/**
 * dessiner nb marches
 * @param {number} nbMarches
 * @param {number} hauteur
 * @param {string} couleurTrait la couleur du contour du rectangle
 * @param {string} couleurRemplissage la couleur de remplissage du rectangle
 */
function dessiner_marches(nbMarches, hauteur, couleurTrait, couleurRemplissage) {

    var x = 0;
    var y = 0;
    var largeur = hauteur;
    for (var i = 1; i <= nbMarches; i++) {
        rectangle(x, y, largeur, hauteur, couleurTrait, couleurRemplissage);
        y = y + hauteur;
        largeur = largeur + hauteur;
    }
}
function dessiner_pyramide(nbMarches, hauteur, couleurTrait, couleurRemplissage) {
    var canvas = document.getElementById("myCanvas");
    var graphicContext = canvas.getContext("2d");
    var x =0;
    var y = 0;
    var largeur = hauteur;
    for (var i = 1; i <= nbMarches; i++) {
        x =(800/2)-(largeur/2);
        rectangle(x, y, largeur, hauteur, couleurTrait, couleurRemplissage);
        y = y + hauteur;
        largeur = largeur + hauteur;
        
    }
}

/**
 * efface le canvas
 */
function effacer() {
    var canvas = document.getElementById("myCanvas");
    var graphicContext = canvas.getContext("2d");
    graphicContext.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * fonction appelÃ©e au chargement de la  if (documentgetElementById("escalier").checked=="true") { page
 */
function init() {
    var canvas = document.getElementById("myCanvas");
    var graphicContext = canvas.getContext("2d");
    if (document.getElementById("h").checked == true) {

        document.getElementById("dessiner").onclick = function () {
            var nb = parseInt(document.getElementById("nbreMarches").value);
            var hauteur = parseInt(document.getElementById("hauteurMarche").value);
            dessiner_marches(nb, hauteur, "c", "c");
        };
    }
    if (document.getElementById("pyramide").checked == true) {
        document.getElementById("dessiner").onclick = function () {
            var nb = parseInt(document.getElementById("nbreMarches").value);
            var hauteur = parseInt(document.getElementById("hauteurMarche").value);
            dessiner_pyramide(nb, hauteur, "c", "c");
        };
    }

    document.getElementById("effacer").onclick = function () {
        effacer(canvas);
    };

}