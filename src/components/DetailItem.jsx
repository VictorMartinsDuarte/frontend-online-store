import React from 'react';
import PropTypes from 'prop-types';

class DetailItem extends React.Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        <div data-testid="product">
          <h4>{arrayProduct.title}</h4>
          <img src={ arrayProduct.thumbnail } alt={ arrayProduct.title } />
          <span>{ `Preço: R$ ${arrayProduct.price}` }</span>
        </div>
      </div>
    );
  }
}

DetailItem.propTypes = {
  arrayProduct: PropTypes.array,
}.isRequired;

export default DetailItem;
