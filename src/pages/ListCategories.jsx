import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { arrayCategories, filterByClick } = this.props;
    return (
      <aside>
        {arrayCategories.map(({ id, name }) => (
          <button
            type="button"
            data-testid="category"
            onClick={ filterByClick }
            key={ id }
          >
            <li
              name={ name }
              id={ id }
            >
              { name }
            </li>
          </button>))}

      </aside>
    );
  }
}
ListCategories.propTypes = {
  arrayCategories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  filterByClick: PropTypes.func.isRequired,
};

export default ListCategories;
