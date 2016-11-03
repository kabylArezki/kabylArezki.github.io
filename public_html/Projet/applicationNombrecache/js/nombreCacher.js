/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {

    var Nvrai = Math.round(Math.random() * (10 - 0) + 0);
    var i = 0;
    document.getElementById("Jouer").onclick = function () {
    var n = parseFloat(document.getElementById("n").value);
        i++;
        if (i < 3) {
            
            if ((Nvrai == n)) {
                document.getElementById("etat").innerHTML = "Bravo";
                var d=3-i;
                document.getElementById("comentaire").innerHTML = "Vous avez gagné en " + d + " essais";
                document.getElementById("etat").style.color = "green";
                document.getElementById("comentaire").style.color = "green";
                i = i+5;

            } else if (Nvrai < n && 3 - i != 0) {

                document.getElementById("etat").innerHTML = n + " est trop grand.";
                var k = 3 - i;
                document.getElementById("comentaire").innerHTML = "il vous reste " + k + " essai(s). Rejouez";
                document.getElementById("etat").style.color = "red";
                document.getElementById("comentaire").style.color = "red";
            } else if (Nvrai > n && 3 - i != 0) {
                var c = 3 - i;
                document.getElementById("etat").innerHTML = n + " est trop petit .";
                document.getElementById("comentaire").innerHTML = "il vous reste " + c + " essai(s). Rejouez";
                document.getElementById("etat").style.color = "red";
                document.getElementById("comentaire").style.color = "red";
            }
            ;
        } else if ((i == 3) && (Nvrai == n)) {
            document.getElementById("etat").innerHTML = "Bravo";
            var t=i;
            document.getElementById("comentaire").innerHTML = "Vous avez gagné en " + t + " essais";
            document.getElementById("etat").style.color = "green";
            document.getElementById("comentaire").style.color = "green";
            i = i+5;
        } else if ((i == 3) && (Nvrai != n)){
            document.getElementById("etat").innerHTML = "Vous avez perdu";
            document.getElementById("comentaire").innerHTML = "Le nombre caché était " + Nvrai;
            document.getElementById("etat").style.color = "red";
            document.getElementById("comentaire").style.color = "red";
            i = i+5;
        }
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
