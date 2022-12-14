function currentTime() {
	let date = new Date()
	let hh = date.getHours()
	let mm = date.getMinutes()

	hh = hh < 10 ? '0' + hh : hh
	mm = mm < 10 ? '0' + mm : mm

	let time = hh + ':' + mm

	document.getElementById('time').innerText = time
	let t = setTimeout(function () {
		currentTime()
	}, 1000)
}
currentTime()
