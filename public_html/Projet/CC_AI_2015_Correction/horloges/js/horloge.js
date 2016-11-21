//--------------------------------------------------------
// variables globales
//--------------------------------------------------------

var horlogesDescr = [
    {ville: 'Paris', decalage: 0, img: 'France.png'},
    {ville: 'Vancouver', decalage: -9, img: 'Canada.png'},
    {ville: 'New york', decalage: -6, img: 'USA.png'},
    {ville: 'Rio de Janeiro', decalage: -3, img: 'Brazil.png'},
    {ville: 'Londres', decalage: -1, img: 'United_Kingdom.png'},
    {ville: 'Le Caire', decalage: +1, img: 'Egypt.png'},
    {ville: 'Tokyo', decalage: +8, img: 'Japan.png'}
];

var lesHorloges = [];

//--------------------------------------------------------
// fonctions appelées depuis la page HTML
//--------------------------------------------------------

function creerHorloges() {
    for (var i = 0; i < horlogesDescr.length; i++) {
        lesHorloges[i] = new Horloge('h' + i, horlogesDescr[i].ville,
                horlogesDescr[i].decalage, horlogesDescr[i].img);
    }
}

//--------------------------------------------------------
// le type Horloge
//--------------------------------------------------------

function Horloge(id, ville, decalage, img) {
    var date = new Date();
    this.heure = (date.getHours() + decalage + 24) % 24;
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    this.id = id;
    document.write('<div class="horloge">');
    document.write('<div id="' + id + '" class="chiffresHorloge"></div>');
    document.write('<p><a href="vancouver.html">' + ville + '</a></p>');
 // document.write('<p>' + ville + '</p>');
 document.write('<img src="images/flags/' + img + '" alt=""/>');
    document.write('</div>');
    this.afficherHeure();
}

Horloge.prototype.afficherHeure = function () {
    var res = this.formaterNombre(this.heure) + ":" +
            this.formaterNombre(this.min) + ":" +
            this.formaterNombre(this.sec);
    document.getElementById(this.id).innerHTML = res;
};

/**
 * Renvoie un chaîne de 2 caractères pour l'affichage d'un nombre avec 2 chiffres.
 * 
 * Si le nombre est un chiffre (0 <= nbre <= 9), la chaîne retournée contient un 
 * caractère '0' avant le chiffre du nombre. Par exemple, si nbre = 7 la chaîne
 * retournée sera '07'.
 * 
 * Si le nombre contient deux chiffres, la chaîne retournée correspond à ces 
 * deux chiffres. Par exemple, si nbre = 14 la chaîne retournée sera '14'.
 *
 * @param {number} nbre le nombre à formater.
 * @returns {res|String} la peremettant d'afficher le nombre avec 2 chiffres.
 */
Horloge.prototype.formaterNombre = function (nbre) {
    res = "";
    if (nbre < 10) {
        res = "0";
    }
    res += nbre;
    return res;
};


Horloge.prototype.incrementer = function () {
    this.sec = this.sec + 1;
    if (this.sec === 60) {
        this.sec = 0;
        this.min = this.min + 1;
        if (this.min === 60) {
            this.min = 0;
            this.heure = this.heure + 1;
            if (this.heure === 24) {
                this.heure = 0;
            }
        }
    }
    this.afficherHeure();
};



function demarrerHorloges() {
    setInterval(function () {
        for (var i = 0; i < horlogesDescr.length; i++) {
            lesHorloges[i].incrementer();
        }
    }, 1000);
}
