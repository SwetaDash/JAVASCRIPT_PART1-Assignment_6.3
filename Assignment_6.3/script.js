function convertCelsiusToFahrenheit(){
    var temperatureInCelsius = 40;
    var celsiusToFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
    console.log("Temperature of " + temperatureInCelsius + " celsius, will be " + celsiusToFahrenheit + " fahrenheit");
}

function convertFahrenheitToCelsius(){
    var temperatureInFahrenheit = 104;
    var fahrenheitToCelsius = ((temperatureInFahrenheit - 32) * 5) / 9;
    console.log("Temperature of " + temperatureInFahrenheit + " fahrenheit, will be " + fahrenheitToCelsius + " celsius");
}

convertCelsiusToFahrenheit();
convertFahrenheitToCelsius()