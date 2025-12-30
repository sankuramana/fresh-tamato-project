let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Fresh ${productName} added to your cart! 🍅`);
}

function orderNow() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
        return;
    }

    const message = `Hello, I want to order ${cartCount} kg of fresh tomatoes.`;
    const phoneNumber = "916309544342"; // updated WhatsApp number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
