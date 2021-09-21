import React from 'react';
import ButtonShoppingCart from './ButtonShoppingCart';
import ListCategories from './ListCategories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCardList from '../components/ProductCardList';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.requestItemFilterAPI = this.requestItemFilterAPI.bind(this);

    this.state = {
      categories: [],
      searchText: '',
      categoryID: '',
      product: [],
    };
  }

  componentDidMount() {
    this.requestAPI();
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  requestAPI = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  async requestItemFilterAPI() {
    const { searchText, categoryID } = this.state;
    console.log(searchText);
    const arrayProduct = await getProductsFromCategoryAndQuery(categoryID, searchText);
    this.setState({
      product: arrayProduct.results,
    });
  }

  render() {
    const { categories, product } = this.state;
    return (
      <>
        <ButtonShoppingCart />
        <label htmlFor="search" data-testid="home-initial-message">
          <input
            type="text"
            name="searchText"
            id="search"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.requestItemFilterAPI }
        >
          Pesquisar
        </button>
        <div><ProductCardList arrayProductList={ product } /></div>
        <ListCategories arrayCategories={ categories } />
      </>
    );
  }
}

export default SearchBar;
