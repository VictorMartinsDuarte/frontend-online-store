import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { arrayCategories } = this.props;
    return (
      <aside>
        {arrayCategories.map(({ id, name }) => (
          <li data-testid="category" key={ id }>{ name }</li>))}
      </aside>
    );
  }
}
ListCategories.propTypes = {
  arrayCategories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ListCategories;
