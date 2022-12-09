// tablica przechowująca produkty w koszyku
var cart = []

// funkcja dodająca produkt do koszyka
function addToCart(name, price) {
	var product = {
		name: name,
		price: price,
	}
	cart.push(product)
}

// funkcja obliczająca łączną cenę produktów w koszyku
function calculateTotalPrice() {
	var totalPrice = 0
	for (var i = 0; i < cart.length; i++) {
		totalPrice += parseInt(cart[i].price)
	}
	return totalPrice
}

// funkcja aktualizująca widok koszyka na stronie
function updateCartView() {
	var cartLink = document.querySelector('#cart-link')
	cartLink.textContent = 'Koszyk (' + cart.length + ')'
}

// obsługa przycisków "Dodaj do koszyka"
var buttons = document.querySelectorAll('.product button')
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		// pobranie nazwy i ceny produktu z elementu HTML
		var productName = this.parentElement.querySelector('h3').textContent
		var productPrice = this.parentElement.querySelector('.price').textContent
		// dodanie produktu do koszyka
		addToCart(productName, productPrice)
		// obliczenie i wyświetlenie łącznej ceny produktów w koszyku
		console.log('Łączna cena: ' + calculateTotalPrice() + ' zł')
		// aktualizacja widoku koszyka na stronie
		updateCartView()
	})
}
