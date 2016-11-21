/*
 * conversion d'une température en °C vers des °F 
 */
function celsius2Farenheit() {
    var tempCelsius = parseFloat(document.getElementById("tempC").value);
    var tempFarenheit = (5/9) * (tempCelsius - 32);
    document.getElementById("tempF").value = tempFarenheit.toFixed(2);
}

/*
 * conversion d'une température en °F vers des °C
 */
function farenheit2Celsius() {
    var tempFarenheit = parseFloat(document.getElementById("tempF").value);
    var tempCelsius = (9.0/5.0 * tempFarenheit) + 32;
    document.getElementById("tempC").value = tempCelsius.toFixed(2);
}



