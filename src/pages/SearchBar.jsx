import React from 'react';
import ButtonShoppingCart from './ButtonShoppingCart';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <ButtonShoppingCart />
        <label htmlFor="search" data-testid="home-initial-message">
          <input type="text" id="search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </>
    );
  }
}

export default SearchBar;
