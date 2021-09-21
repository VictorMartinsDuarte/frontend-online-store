import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCards';

class ProductCardList extends React.Component {
  render() {
    const { arrayProductList } = this.props;
    return (
      arrayProductList
        .map((product) => <ProductCard key={ product.id } arrayProduct={ product } />)
    );
  }
}

ProductCardList.propTypes = {
  arrayProductList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,

};

export default ProductCardList;
