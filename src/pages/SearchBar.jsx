import React from 'react';
import ButtonShoppingCart from './ButtonShoppingCart';
import ListCategories from './ListCategories';
import { getCategories } from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestAPI();
  }

    requestAPI = async () => {
      const categories = await getCategories();
      console.log(categories);
      this.setState({
        categories,
      });
    }

    render() {
      const { categories } = this.state;
      return (
        <>
          <ButtonShoppingCart />
          <label htmlFor="search" data-testid="home-initial-message">
            <input type="text" id="search" data-testid="query-input" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button type="button" data-testid="query-button">Pesquisar</button>
          <ListCategories arrayCategories={ categories } />

        </>
      );
    }
}

export default SearchBar;
