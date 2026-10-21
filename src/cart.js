function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(card, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество товара должно быть больше нуля');
  }

  const existingProductIndex = card.findIndex(item => item.id === product.id);
  const currentQuantity = existingProductIndex > -1 ? card[existingProductIndex].quantity : null;
  const totalQuantity = currentQuantity !== null ? currentQuantity + quantity : quantity;

  if (totalQuantity > product.stock) {
    throw new RangeError('Превышено количество товара на складе');
  }

  const newCart = card.map(item => ({ ...item }));
  if (existingProductIndex > -1) {
    newCart[existingProductIndex] = { ...product, quantity: totalQuantity };
  } else {
    newCart.push({ ...product, quantity });
  }

  return newCart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
