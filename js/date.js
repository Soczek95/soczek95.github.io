function currentDate() {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	let date = new Date()
	let dd = date.getDate()
	var month = monthNames[date.getMonth()]
	var yyyy = date.getFullYear()

	var today = dd + ' ' + month + ' ' + yyyy
	document.getElementById('date').innerHTML = today

	let t = setTimeout(function () {
		currentDate()
	}, 1000)
}
currentDate()
