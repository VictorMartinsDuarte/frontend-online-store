import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <label htmlFor="search" data-testid="home-initial-message">
        <input type="text" id="search" />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>
    );
  }
}

export default SearchBar;
