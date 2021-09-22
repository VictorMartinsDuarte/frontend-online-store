import React, { Component } from 'react';

class AddToCartButton extends Component {

  handleClick = () => {
    const { arrayProduct: { title, price, thumbnail } } = this.props;
    const product = {
      title,
      price,
      thumbnail,
      count: 1,
    };
    localStorage.setItem('shoppingCart', JSON.stringify(product));
  }

  render() {
    return (
      <div>
        <button
          onClick={ this.handleClick }
          data-testid="product-add-to-cart"
          type="submit"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
