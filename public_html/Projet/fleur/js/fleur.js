/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





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
function dessiner() {
    var k = parseFloat(document.getElementById("nbr").value);
    k = k - 1;
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < 2 * k; i++) {
        ellipse(ctx, canvas.width / 2, canvas.height / 2, 200, 40, (90 / k) * i, 'blue');

    }
}
function effacer() {
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");


    ctx.clearRect(0, 0, canvas.width, canvas.height);


}