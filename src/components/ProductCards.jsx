import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { arrayProduct: { title, price, thumbnail, id } } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/product-detail/${id}` }>
        <div data-testid="product">
          <h4>{title}</h4>
          <img src={ thumbnail } alt={ title } />
          <span>{ `Preço: R$ ${price}` }</span>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  arrayProduct: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,

};

export default ProductCard;
