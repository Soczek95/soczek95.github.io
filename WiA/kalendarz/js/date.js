function date() {
	const month_names = [
		'Styzcen',
		'luty',
		'marzec',
		'kwiecien',
		'Maj',
		'Czerwiec',
		'Lipiec',
		'Sierpien',
		'Wrzesien',
		'Pazdziernik',
		'Listopad',
		'Grudzien',
	]

	document.write('<div class="month1">')
	document.write('<img src=https://i.pinimg.com/564x/3a/1f/aa/3a1faaeb334aa5eeb67229f2f06b62cc.jpg></img>')
	document.write('<h1>' + month_names[new Date().getMonth() - 1] + '</h1>')
	if (new Date().getMonth() - 1 == 2) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 28; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else if ((new Date().getMonth() - 1) % 2 == 0) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 30; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 31; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	}
	document.write('</div>')
	document.write('<div class="month2">')
	document.write('<img src=https://i.pinimg.com/564x/3a/1f/aa/3a1faaeb334aa5eeb67229f2f06b62cc.jpg></img>')
	document.write('<h1>' + month_names[new Date().getMonth()] + '</h1>')
	if (new Date().getMonth() == 2) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 28; i++) {
			document.write('<td id=day' + i + '>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else if (new Date().getMonth() % 2 == 0) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 30; i++) {
			document.write('<td id=day' + i + '>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 31; i++) {
			document.write('<td id=day' + i + '>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	}

	document.write('</div>')
	document.write('<div class="month3">')
	document.write('<img src=https://i.pinimg.com/564x/3a/1f/aa/3a1faaeb334aa5eeb67229f2f06b62cc.jpg></img>')
	document.write('<h1>' + month_names[new Date().getMonth() + 1] + '</h1>')
	if (new Date().getMonth() + 1 == 2) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 28; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else if ((new Date().getMonth() + 1) % 2 == 0) {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 30; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	} else {
		document.write('<table>')
		document.write('<tr>')
		for (i = 1; i <= 31; i++) {
			document.write('<td>' + i + '</td>')
			if (i % 7 == 0) {
				document.write('</tr><tr>')
			}
		}
		document.write('</table>')
	}

	document.write('</div>')
}
date()
function currentDate() {
	document.getElementById('day' + new Date().getDate()).style.color = 'white'
	document.getElementById('day' + new Date().getDate()).style.backgroundColor = '#005C53'
	let t = setTimeout(function () {
		currentDate()
	}, 1000)
}
currentDate()
