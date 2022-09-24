const keyCart = '@app-delivery:cart';

export function getCart() {
  return JSON.parse(localStorage.getItem(keyCart)) || [];
}

export function setCart(cart) {
  localStorage.setItem(keyCart, JSON.stringify(cart || {}));
}

export function changeCartItemQuantity(id, quantity) {
  let cart = getCart();
  cart = cart.map((item) => {
    if (item.id === id) {
      item.quantity = quantity;
    }
    return item;
  });
  localStorage.setItem(keyCart, JSON.stringify(cart || {}));
}

export function getCartItem(id) {
  const cart = getCart();
  return cart.find((item) => item.id === id);
}

export function removeCartItem(id) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);
  setCart(cart);
}

export function addCartItemIfNotExists(item) {
  const cart = getCart();

  const exists = cart.some((cartItem) => cartItem.id === item.id);

  if (!exists) {
    cart.push({ ...item, quantity: 0 });
  }

  setCart(cart);
}
