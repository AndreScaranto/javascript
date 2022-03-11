function converterTemperatura(celsius) {
    var fah = (celsius * 1.8) + 32;
    return fah;
}

var fahreinheit = converterTemperatura(30);
console.log(fahreinheit);
