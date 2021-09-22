import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButtonDetail from './AddToCartButtonDetail';

class DetailItem extends React.Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        <div data-testid="product">
          <h4 data-testid="product-detail-name">{arrayProduct.title}</h4>
          <img src={ arrayProduct.thumbnail } alt={ arrayProduct.title } />
          <span>{ `Preço: R$ ${arrayProduct.price}` }</span>
          <AddToCartButtonDetail arrayProduct={ arrayProduct } />
        </div>
        <form action="">
          <textarea
            data-testid="product-detail-evaluation"
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </form>
      </div>
    );
  }
}

DetailItem.propTypes = {
  arrayProduct: PropTypes.array,
}.isRequired;

export default DetailItem;
