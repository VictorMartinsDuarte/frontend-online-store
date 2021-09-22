import React from 'react';
import ButtonShoppingCart from './ButtonShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCards';

class DetailsProduct extends React.Component {
  constructor() {
    super();

    this.teste = this.teste.bind(this);

    this.state = {
      itens: [],
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
    });
  }

  render() {
    const { itens } = this.state;
    const { match: { params: { id } } } = this.props;
    const productDetail = itens.filter((product) => id === product.id);
    console.log(productDetail);
    const productItem = (
      <div>{ productDetail[0].title }</div>
    );
    return (
      <div data-testid="product-detail-name">
        <ButtonShoppingCart />
        <div>{productDetail[0] ? productDetail[0].title : <span>carragando</span>}</div>
      </div>
    );
  }
}

export default DetailsProduct;
