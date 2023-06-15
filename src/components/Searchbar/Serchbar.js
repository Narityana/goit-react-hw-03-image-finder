import PropTypes from 'prop-types';

import css from './Serchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header class={css.searchbar__container}>
      <form class={css.searchbar__form} onSubmit={onSubmit}>
        <button type="submit" class={css.searchbar__button}>
          <span class={css.searchbar__buttonLabel}>Search</span>
        </button>

        <input
          class={css.searchbar__input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
