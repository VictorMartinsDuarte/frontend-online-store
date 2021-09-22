import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        <h4 data-testid="shopping-cart-product-name">{ cartItems.title }</h4>
        <span data-testid="shopping-cart-product-quantity">{cartItems.count}</span>
        {/* <span>{ `Preço: R$ ${cartItems.price}` }</span> */}
      </div>
    );
  }
}

export default ShoppingCart;
