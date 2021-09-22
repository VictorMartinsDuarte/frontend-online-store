import React from 'react';
import PropTypes from 'prop-types';
import ButtonShoppingCart from './ButtonShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import DetailItem from '../components/DetailItem';

class DetailsProduct extends React.Component {
  constructor() {
    super();

    this.teste = this.teste.bind(this);

    this.state = {
      itens: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.teste();
  }

  async teste() {
    const { match: { params: { categoryId } } } = this.props;
    const teste = await getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      itens: teste.results,
      loading: false,
    });
  }

  render() {
    const { itens, loading } = this.state;
    const { match: { params: { id } } } = this.props;
    const productDetail = itens.filter((product) => id === product.id);
    if (loading) return <span>carregando...</span>;
    console.log(productDetail);
    return (
      <div>
        <ButtonShoppingCart />
        <div>
          <DetailItem arrayProduct={ productDetail[0] } />
        </div>
      </div>
    );
  }
}

DetailsProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string,
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsProduct;
