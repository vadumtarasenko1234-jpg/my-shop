function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('techCart')) || [];
    let totalItems = 0;
    cart.forEach(item => totalItems += (item.qty || 1));
    let countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = totalItems;
}

function addToCartUniversal(event) {
    event.preventDefault();
    let title = document.querySelector('.product-title').innerText.trim();
    let price = parseInt(document.querySelector('.current-price-value').innerText.replace(/\D/g, ''));
    let qtyInput = document.querySelector('.qty-input');
    let qty = qtyInput ? parseInt(qtyInput.value) : 1;
    let imgSrc = document.querySelector('.main-image').src;

    let cart = JSON.parse(localStorage.getItem('techCart')) || [];
    let existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ title: title, price: price, qty: qty, image: imgSrc });
    }

    localStorage.setItem('techCart', JSON.stringify(cart));
    updateCartCount();
    alert(`Товар "${title}" додано в кошик!`);
}

// Викликаємо при завантаженні
window.onload = updateCartCount;