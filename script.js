let cart = [];
function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}
function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = cart.map(item =>
    `<div>${item.name} - $${item.price.toFixed(2)}</div>`
  ).join('');
}
function placeOrder() {
  const address = document.getElementById('address').value;
  if (!address || cart.length === 0) {
    alert('Please enter address and add items.');
    return;
  }
  // Here, send cart and address to backend via AJAX/fetch API (pseudo AJAX)
  document.getElementById('orderStatus').innerText = 'Order placed! Waiting for delivery...';
}