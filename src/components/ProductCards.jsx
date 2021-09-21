import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { arrayProduct: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h4>{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <span>{ `Preço: R$ ${price}` }</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  arrayProduct: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,

};

export default ProductCard;
