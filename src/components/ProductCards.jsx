import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/product-detail/${arrayProduct.id}/${arrayProduct.category_id}` }>
        <div data-testid="product">
          <h4>{arrayProduct.title}</h4>
          <img src={ arrayProduct.thumbnail } alt={ arrayProduct.title } />
          <span>{ `Preço: R$ ${arrayProduct.price}` }</span>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  arrayProduct: PropTypes.array,
}.isRequered;

export default ProductCard;
