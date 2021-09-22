import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';

class ProductCard extends React.Component {
  render() {
    const { arrayProduct } = this.props;
    const product = {
      title: arrayProduct.title,
      price: arrayProduct.price,
      thumbnail: arrayProduct.thumbnail,
    };
    return (
      <div>
        <div data-testid="product">
          <h4>{arrayProduct.title}</h4>
          <img src={ arrayProduct.thumbnail } alt={ arrayProduct.title } />
          <span>{ `Preço: R$ ${arrayProduct.price}` }</span>
          <AddToCartButton arrayProduct={ product } />
        </div>
        <div>
          <Link
            data-testid="product-detail-link"
            to={ `/product-detail/${arrayProduct.id}/${arrayProduct.category_id}` }
          >
            <button type="button">mais detalhes</button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  arrayProduct: PropTypes.array,
}.isRequired;

export default ProductCard;
