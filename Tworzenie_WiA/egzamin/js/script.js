function cena() {
	var p = document.getElementById('rodzaj').value
	var l = document.getElementById('ilosc').value
	var wynik = 0

	if (p == 1) {
		wynik = l * 4
	} else if (p == 2) {
		wynik = l * 3.5
	} else {
		wynik = 0
	}
	// alert(wynik)
	document.getElementById('cost').innerHTML = ("koszt paliwa to: "+wynik+"zł")
}
