let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const quantity = 1;
    const total = productPrice * quantity;

    cart.push({ name: productName, quantity, total });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.total}</td>
            </tr
        `;
        total += item.total;
    });

    cartTotal.textContent = `Total: $${total}`;
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some products before placing an order.');
        return;
    }

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'thankyou.html';
}

window.onload = function () {
    if (window.location.pathname.includes('cart.html')) {
        updateCart();
    }
};
