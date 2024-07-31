const menuList = document.getElementById('menu-list');
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

// Add event listeners to order buttons
menuList.addEventListener('click', handleOrder);

// Function to handle order
function handleOrder(e) {
	if (e.target.classList.contains('order-btn')) {
		const dish = e.target.closest('.dish');
		const name = dish.querySelector('h3').textContent;
		const price = parseFloat(dish.querySelector('p').textContent.replace('$', ''));
		addToCart(name, price);
	}
}

// Function to add to cart
function addToCart(name, price) {
	const cartItem = document.createElement('li');
	cartItem.textContent = `${name} - $${price}`;
	cartList.appendChild(cartItem);
	updateTotalPrice(price);
}

// Function to update total price
function updateTotalPrice(price) {
	const currentTotal = parseFloat(totalPriceElement.textContent.replace('$', ''));
	const newTotal = currentTotal + price;
	totalPriceElement.textContent = `$${newTotal.toFixed(2)}`;
}

// Add event listener to checkout button
checkoutButton.addEventListener('click', handleCheckout);

// Function to handle checkout
function handleCheckout() {
	alert('Thank you for your order!');
	cartList.innerHTML = '';
	totalPriceElement.textContent = '$0.00';
}
