import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButtonDetail extends Component {
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
          data-testid="product-detail-add-to-cart"
          type="submit"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCartButtonDetail.propTypes = {
  arrayProduct: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,

};

export default AddToCartButtonDetail;
