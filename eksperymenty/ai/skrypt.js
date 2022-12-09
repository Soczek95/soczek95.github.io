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

// funkcja wyświetlająca liczbę produktów w koszyku
function showCartCount() {
	console.log('Liczba produktów w koszyku: ' + cart.length)
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
		// wyświetlenie liczby produktów w koszyku
		showCartCount()
	})
}
