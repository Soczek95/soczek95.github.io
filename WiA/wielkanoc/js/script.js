function bg() {
	body = document.getElementsByTagName('body')[0]

	if (body.classList == 'bg') {
		body.classList.remove('bg')
	} else {
		body.classList.add('bg')
	}
}
