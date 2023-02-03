function bmi() {
	var H = document.getElementById('H').value
	var W = document.getElementById('W').value
	var bmi = 0.0

	if (H > 100) {
		H = H / 100
	}

	bmi = W / (H * H)
	bmi = bmi.toFixed(2)
	document.getElementById('BMI').innerHTML = bmi
}
