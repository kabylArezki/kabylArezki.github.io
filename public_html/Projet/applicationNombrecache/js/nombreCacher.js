/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {
    
    var Nvrai = Math.round(Math.random() * (10 - 0) + 0);
    var i = 0;
    document.getElementById("Jouer").onclick = function () {
        i++;
        if (i <= 3) {
            var n = parseFloat(document.getElementById("n").value);
            if ((Nvrai == n)) {
                document.getElementById("etat").innerHTML = "Bravo";
                document.getElementById("comentaire").innerHTML = "Vous avez gagné en " + 3 - i + " essais";
                document.getElementById("etat").style.color = "green";
                document.getElementById("comentaire").style.color = "green";
            } else if(Nvrai<n){

                document.getElementById("etat").innerHTML = n + " est trop grand.";
                document.getElementById("comentaire").innerHTML = "il vous reste " + 3 - i + " essai(s). Rejouez";
                document.getElementById("etat").style.color = "red";
                document.getElementById("comentaire").style.color = "red";
            } else if(Nvrai>n){

                document.getElementById("etat").innerHTML = n + " est trop petit .";
                document.getElementById("comentaire").innerHTML = "il vous reste " + 3 - i + " essai(s). Rejouez";
                document.getElementById("etat").style.color = "red";
                document.getElementById("comentaire").style.color = "red";
            }
            ;
        } else {
            document.getElementById("etat").innerHTML = "Vous avez perdu";
            document.getElementById("comentaire").innerHTML = "Le nombre caché était " + Nvrai;
            document.getElementById("etat").style.color = "red";
            document.getElementById("comentaire").style.color = "red";
        }
        ;

        document.getElementById("Abandonner").onclick = function () {
            var n = parseFloat(document.getElementById("n").value);
            document.getElementById("etat").innerHTML = "Pourquoi abandonner ?";
            document.getElementById("comentaire").innerHTML = "Le nombre caché  " + Nvrai;
            document.getElementById("etat").style.color = "red";
            document.getElementById("comentaire").style.color = "red";
        };
    }
}