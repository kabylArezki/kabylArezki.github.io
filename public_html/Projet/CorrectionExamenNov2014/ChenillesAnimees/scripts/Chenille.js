//------------------------------------------------------------------------------
// le type Anneau
//------------------------------------------------------------------------------

/**
 * Constructeur d'un objet Anneau
 * @param {type} x   abscisse du centre de l'Anneau
 * @param {type} y   ordonnée du centre de l'Anneau
 * @param {type} r   le rayon de l'Anneau
 * @returns {Anneau}
 */
function Anneau(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

//-- méthodes ------------------------------------------------------------------

/**
 * Dessine un Anneau
 * @param {object} graphicContext le contexte graphique utilisé pour dessiner 
 *        l'Anneau
 * @returns {undefined}
 */
Anneau.prototype.dessiner = function(graphicContext) {
    graphicContext.beginPath();
    graphicContext.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    // this est l'objet Anneau auquel s'appliquent les instructions
    graphicContext.strokeStyle = "coral";
    graphicContext.fillStyle = "bisque";
    graphicContext.fill();
    graphicContext.stroke();
};

/**
 * Place un anneau à la position d'un autre objet (Anneau ou Tete), position
 * définie par deux attributs x et y
 * @param {object} obj l'ojet à la position duquel l'anneau doit être placé
 * @returns {undefined}
 */
Anneau.prototype.placerA = function(obj) {
    this.x = obj.x;
    this.y = obj.y;
};

//------------------------------------------------------------------------------
// le type Tete
//------------------------------------------------------------------------------

/**
 * Constructeur d'objets de type Tete
 * @param {type} x   abscisse du centre de la Tête
 * @param {type} y   ordonnée du centre de la Tête
 * @param {type} r   le rayon de la Tête
 * @returns {Tete}
 */
function Tete(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cap = 0;   // le cap initial est nul
}

//-- méthodes ------------------------------------------------------------------

/**
 * Dessine une Tête
 * @param {object} graphicContext le contexte graphique utilisé pour dessiner
 *        la tête.
 * @returns {undefined}
 */
Tete.prototype.dessiner = function(graphicContext) {
    graphicContext.beginPath();
    graphicContext.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    graphicContext.strokeStyle = "red";
    graphicContext.fillStyle = "black";
    graphicContext.fill();
    graphicContext.stroke();
};

/**
 * Modifie le cap de la Chenille
 * @param {number} deltaCap la variation du cap
 * @returns {undefined}
 */
Tete.prototype.devierCap = function(deltaCap) {
    this.cap += deltaCap;
};

/**
 * Test si le cap  est tel que lors de son prochain déplacement l'objet Tete
 * sera entièrement dans le canvas.
 * @param {objcet} canvas le canvas dans laquelle la tête se déplace
 * @returns {Boolean} true si le cap est tel que lors de son prochain déplacement
 *         la tête sera entièrement dans le canvas, false sinon.
 */
Tete.prototype.capOK = function(canvas) {
    // Attention, les fonctions sinus et consinus prennent comme paramètre
    // des valeurs en radians. Le cap exprimé en degrés doit donc être 
    // converti en radians.
    var x1 = Math.round(this.x + this.r * Math.cos(Math.PI * this.cap / 180));
    var y1 = Math.round(this.y + this.r * Math.sin(Math.PI * this.cap / 180));

    return x1 >= this.r && x1 <= (canvas.width - this.r)
            && y1 >= this.r && y1 <= (canvas.height - this.r);
};

/**
 * déplace la tête dans la direction de son cap d'une distance égale
 * au rayon de la tête.
 * @returns {undefined}
 */
Tete.prototype.deplacerSelonCap = function() {
    // Attention, les fonctions sinus et consinus prennent comme paramètre
    // des valeurs en radians. Le cap exprimé en degrés doit donc être 
    // converti en radians.
    this.x = Math.round(this.x + this.r * Math.cos(Math.PI * this.cap / 180));
    this.y = Math.round(this.y + this.r * Math.sin(Math.PI * this.cap / 180));
};

//------------------------------------------------------------------------------
// le type Chenille
//------------------------------------------------------------------------------

/**
 * Constructeur d'objets Chenille
 * @param {object} canvas le canvas dans lequel la chenille se déplace
 * @param {type} nbAnneaux
 * @param {type} r la rayon des anneaux et de la tête de la chenille
 * @returns {Chenille}
 */
function Chenille(canvas, nbAnneaux, r) {
    this.canvas = canvas;

    // creation de la tête de la chenille, placée au centre du canvas
    var x = Math.round(canvas.width / 2);
    var y = Math.round(canvas.height / 2);
    this.tete = new Tete(x, y, r);

    // création des anneaux de la chenille
    this.anneaux = [];   // anneaux est initialement un tableau vide
    for (var i = 0; i < nbAnneaux; i++) {
        x = x - r;
        this.anneaux[i] = new Anneau(x, y, r); // création du ième anneau
    }
}

// -- méthodes -----------------------------------------------------------------
/**
 * dessine une chenille
 * @returns {undefined}
 */
Chenille.prototype.dessiner = function() {
    var ctxt = this.canvas.getContext("2d");
    this.tete.dessiner(ctxt);
    for (var i = 0; i < this.anneaux.length; i++) {
        this.anneaux[i].dessiner(ctxt);
    }
};

/**
 * fait effectuer un déplacement élémentaire à une chenille.
 * @returns {undefined}
 */
Chenille.prototype.deplacer = function() {
    // fait deplacer les anneaux.
    // le ième anneau prends la place du (i-1)ème anneau, 
    for (var i = this.anneaux.length - 1; i > 0; i--) {
        this.anneaux[i].placerA(this.anneaux[i - 1]);
    }
    // l'anneau 0 prend la place de la tête
    this.anneaux[0].placerA(this.tete);
    
    // deplacement de la tête
    // on fait dévier le cap au hasard de + ou - 30 degrés
    this.tete.devierCap(-30.0 + Math.random() * 60.0);
    // si le nouveau cap met la tête de la chenille en dehors du canvas
    // on lui rajoute 10 degrés jusqu'à ce que l'on soit sur que la tête
    // sera toujours dans le canvas.
    while (!this.tete.capOK(this.canvas)) {
        this.tete.devierCap(10);
    }
    // fait avancer la tête dans la direction du cap
    this.tete.deplacerSelonCap();
};

//------------------------------------------------------------------------------
// Méthode invoquée au chargement de la page.
//------------------------------------------------------------------------------

/**
 * function invoquée lorsque le document est chargé.
 * Créee 5 Chenilles dans le canvas "myCanvas" et associe 
 * - au bouton "Start" une action qui a intervalles réguliers déplace
 *   les chenilles et les rédessine.
 * - au bouton "Stop" une action qui interrompt l'animation.
 * @returns {undefined}
 */
function init() {
    var timerId = 0;    // un timer pour 'animation
    var canvas = document.getElementById("myCanvas");  
    var ctxt = canvas.getContext("2d");

    // création et affichage des objets chenille dans leur position initiale 
    var chenilles = [];
    for (var i = 0; i < 5; i++) {
        chenilles[i] = new Chenille(canvas, 10, 14);
        chenilles[i].dessiner();
    }
    
    // association au bouton Start d'un traitement qui lance l'animation
    document.getElementById("startBtn").onclick = function() {
        // change l'atat des boutons Start et Stop
        document.getElementById("stopBtn").disabled = false;
        document.getElementById("startBtn").disabled = true;
        // creation d'un timer qui toutes les 50 milisecondes déplace et
        // réaffiche les chenilles
        timerId = setInterval(function() {
            ctxt.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < chenilles.length; i++) {
                chenilles[i].deplacer();
                chenilles[i].dessiner();
            }
        }, 50);
    };
    
    // association au bouton Stop d'un traitement qui interrompt l'animation
    document.getElementById("stopBtn").onclick = function() {
        // change l'atat des boutons Start et Stop
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("startBtn").disabled = false;
        // interruption du timer
        clearInterval(timerId);
    };
}
