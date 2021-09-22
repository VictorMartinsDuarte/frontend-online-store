import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        <div data-testid="product">
          <h4>{arrayProduct.title}</h4>
          <img src={ arrayProduct.thumbnail } alt={ arrayProduct.title } />
          <span>{ `Preço: R$ ${arrayProduct.price}` }</span>
        </div>
        <div data-testid="product-detail-link">
          <Link to={ `/product-detail/${arrayProduct.id}/${arrayProduct.category_id}` }>
            <button type="button">mais detalhes</button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  arrayProduct: PropTypes.array,
}.isRequered;

export default ProductCard;
