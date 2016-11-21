/**
 * Dessine une ellipse dans un canvas
 * @param {CanvasRenderingContext2D} ctx le contexte graphique du canvas
 * @param {number} cx l'abscisse du centre de l'ellipse
 * @param {number} cy l'ordonnée du centre de l'ellipse
 * @param {number} rx le rayon horizontal de l'ellipse
 * @param {number} ry le rayon vertical de l'ellipse
 * @param {number} angle l'angle (en degrés) de l'ellipse par rapport à l'horizontale
 * @param {string} style le style de tracé (couleur) pour le contour de l'ellipse
 */
function ellipse(ctx, cx, cy, rx, ry, angle, style) {
    ctx.save(); // sauvegarde l'état du contexte graphique
    ctx.beginPath();
    ctx.translate(cx, cy);
    ctx.rotate(angle * Math.PI / 180);
    ctx.scale(rx, ry);
    ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
    ctx.restore(); // restaure l'état original du contexte graphique
    ctx.save();
    if (style) {
        ctx.strokeStyle = style;
    }
    ctx.stroke();
    ctx.restore();
}

/**
 * Dessine une "fleur" dans le canvas 
 * @param {CanvasRenderingContext2D} ctx le contexte graphique du canvas
 * @param {number} xc   abscisse du centre de la fleur
 * @param {number} yc   ordonnée du centre de la fleur
 * @param {number} rayon le rayon de la fleur
 * @param {type} style la couleur du trait
 */
function dessineFleur(ctx, xc, yc, rayon, style) {
    var i;
    var angle = 0;
    for (i = 0; i <= 5; i++, angle += 30) {
        ellipse(ctx, xc, yc, rayon, rayon / 10, angle, style);
    }

}

/**
 * Efface le canvas
 * @param {CanvasRenderingContext2D} ctx le contexte graphique du canvas
 */
function effacer(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * dessine une fleur bleue au centre du canvas
 */
function dessine1Fleur() {
    var canvas = document.getElementById("canvas");
    dessineFleur(canvas.getContext("2d"), 300, 300, 100, 'blue');
}


/**
 * Remplit le canvas avec des fleurs.
 * Le nombre de fleurs à dessiner par ligne est défini par la valeur de 
 * l'élement input d'id nbFleurs.
 */
function dessineChampDeFleurs() {
    var canvas = document.getElementById("canvas");
    var noLigne,noColonne;
    var nbFleurs = parseInt(document.getElementById("nbFleurs").value);
    var rayon = canvas.width / (2 * nbFleurs);
    var xc;
    var yc = rayon;
    var ctx = canvas.getContext("2d");
    effacer(ctx);
    for (noLigne = 1 ; noLigne <= nbFleurs; noLigne++) {
        xc = rayon;
        for (noColonne = 1; noColonne <= nbFleurs ; noColonne++) {
            dessineFleur(ctx, xc, yc, rayon, 'red');
            xc = xc + 2 * rayon;
        }
        yc += 2 * rayon;
    }
}