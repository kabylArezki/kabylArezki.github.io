/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function convertirTvsV() {
    
var t = parseFloat(document.getElementById("op1").value);
var f=((9/5)*t)+32;

  
    document.getElementById("op2").value = f;

}
function convertirFvsT(){
        var f = parseFloat(document.getElementById("op2").value);
        var t=(5/9)*(f-32);
        
          document.getElementById("op1").value = t;
}