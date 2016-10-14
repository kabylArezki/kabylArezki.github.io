/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculer() {
    var operande1 = parseFloat(document.getElementById("op1").value);
    var operande2 = parseFloat(document.getElementById("op2").value);
    var operateur = document.getElementById("operateur").value;

  
    var res;

    switch (operateur) {
        case "+" :
            res = operande1 + operande2;
            break;
        case "-" :
            res = operande1 - operande2;
            break;
        case "*" :
            res = operande1 * operande2;
            break;
        case "/" :
            res = operande1 / operande2;
            break;
    }
    document.getElementById("resultat").innerHTML = res;

}



