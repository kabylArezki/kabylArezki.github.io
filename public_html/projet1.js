/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// exo1:
function surfaceRectangle() {
    var largeur;
    var longueur;
//Il faut ici transformer les chaînes saisies en nombre, faute de quoi l'opérateur + agit comme une concaténation et non une somme
    largeur = Number(prompt("Quelle est la largeur du rectangle ?"));
    longueur = Number(prompt("Quelle est la longueur du rectangle ?"));

    alert("La surface vaut " + longueur * largeur);
    alert("Le périmètre vaut " + 2 * (longueur + largeur)); //Il faut ici transformer les chaînes saisies en nombre, faute de quoi l'opérateur + agit comme une concaténation et non une somme
}

//exo2
function surfaceCercle() {
    var rayon = parseFloat(prompt("Entrez le rayon du cercle : "));

    return Math.PI * 2 * rayon;
}
//exo3:
var a = 2, b = 3;
function multiplie(x) {
    this.x = x;
    return x * 3;

}
function affiche() {
    alert(multiplie(a));
    alert(multiplie(b));
}

//exo4:
var tab = [-2, 1, 4];
function additionne(x) {

    return x + 2;

}
function affiched() {

    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length - 1]));
}
//exo5:

function boucle() {
    var tabl = new Array(5);

    for (var i = 0; i < (tabl.length - 1); i++) {
        tabl[i] = i * i;
    }
    alert(tabl);
}
function boucle2() {
    var NBR = parseInt(prompt("donne le nobr de votre tableaux ??"));
    var tabl = new Array(NBR);

    for (var i = 0; i < (tabl.length - 1); i++) {
        tabl[i] = i * i;
    }
    alert(tabl);
}

//exo6:

//Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le troisième 4 
var tabl = [-2, 1, 4];
//Créez une fonction soustrait prenant un argument x et renvoyant le résultat de la soustraction de x-2 si x est positif ou nul, la chaîne de caractères "Nombre négatif!" sinon. 
function soustrait(x) {
    if ((x >= 0)) {
        return x - 2;
    } else {
        return "Nombre négatif!";
    }
}
//Créez une fonction affichee, appelée au clic sur le bouton, qui affiche dans des boîtes d'alerte successivement le résultat de soustrait appliqué au premier élément, puis au dernier élément du tableau (en utilisant la propriété length).
function affichee() {
    alert(soustrait(tabl[0]));
    alert(soustrait(tabl[tabl.length - 1]));
}
//exo7:
//Au click sur le bouton, lancer la fonction jourDeLaSemaine(). Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.
function jourDeLaSemaine() {

    var aujourdhui = new Date;

    jour = aujourdhui.getDay();
    var jourFrancais;

    switch (jour) {
        case 0 :
            jourFrancais = "dimanche";
            break;
        case 1 :
            jourFrancais = "lundi";
            break;
        case 2 :
            jourFrancais = "mardi";
            break;
        case 3 :
            jourFrancais = "mercredi";
            break;
        case 4 :
            jourFrancais = "jeudi";
            break;
        case 5 :
            jourFrancais = "vendredi";
            break;
        case 6 :
            jourFrancais = "samedi";
            break;
        default:
            jourFrancais = "jour inexistant";
            break;
    }

    alert("Nous sommes " + jourFrancais + ".");

}
//exo8:
/*Appel à une fonction retournant une valeur
 Créez une fonction qui :
 demande la saisie d'un rayon ;
 retourne la surface du cercle de ce rayon
 Affichez le résultat de l'appel à cette fonction en cliquant sur le bouton.*/

function  surfaceDuCercle() {
    var Ry = parseFloat(prompt("enter le rayon svp ??"));
    return (Math.PI * 2 * Ry);
}
function afficheSurfaceDuCercle() {
    alert(surfaceDuCercle());
}
/*Calcul de la longueur d'un côté de triangle rectangle
 On considère sur le cercle un point M :
 AM2=2R(R+x).
 Créez une fonction prenant comme paramètre R et x et retournant la valeur de AM.
 */
function  calculeAM(x, R) {

    return Math.sqrt(2 * R * (R + x));
}
/*Créez une fonction qui :
 crée un tableau de valeurs de x pour x=R, R/2, 0, -R/2 et -R.
 déclare un tableau y de longueur 5
 affecte à chaque élément de y la valeur retournée par la fonction calculant AM pour chaque valeur de x
 retourne le tableau y*/
function tableau() {
    var Ry = parseFloat(prompt("enter le rayon svp ??"));

    var x = new Array(Ry, Ry / 2, 0, -Ry / 2, -Ry);
    var y = new Array(5);
    for (var i = 0; i < 5; i++) {
        y[i] = calculeAM(x[i], Ry);
    }
    alert(y);

}
//exo9:

/*Au click sur le bouton, lancer la fonction testWhile. 
 * Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant le caractère ", et le redemande tant que l'utilisateur ne l'a pas fait. Il affiche ensuite la chaîne saisie entre guillemets.
 */
function testWhile() {
    do {
        var cond = parseInt(prompt("enter le rayon svp ??"));
    }
    while (cond !==-1);
}

//exo10:
/*Créer une fonction modif_paragraphe,
 *  appelée en cliquant sur le titre. 
 *  Cette fonction sélectionne le paragraphe en utilisant son identifiant, 
 *  puis le modifie avec la propriété innerHTML, en remplaçant le mot original en caractères 
 *  droit par le mot corrigé, en italique.*/
function modif_paragraphe(){
    element=document.getElementById("pr");
    element.innerHTML="Modifer";
}
function centrage_h1(){
    titre=(document.getElementsByName("p")[0])
    titre.setAttribute("color", "red");
}