import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListCategories extends React.Component {
  render() {
    const { arrayCategories, filterByClick } = this.props;
    return (
      <aside>
        {arrayCategories.map(({ id, name }) => (
          <Link onClick={ filterByClick } to={ name } key={ id }>
            <li
              name={ name }
              data-testid="category"
              key={ id }
            >
              { name }
            </li>
          </Link>))}

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
