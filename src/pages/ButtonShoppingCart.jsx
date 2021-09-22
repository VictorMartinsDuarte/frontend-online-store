import React from 'react';
import { Link } from 'react-router-dom';

class ButtonShoppingCart extends React.Component {
  render() {
    return (
      <Link to="/shopping-cart">
        <h4 data-testid="shopping-cart-button">Carrinho de Compras</h4>
      </Link>
    );
  }
}

export default ButtonShoppingCart;
