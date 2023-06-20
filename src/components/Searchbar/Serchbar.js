import React, { Component } from 'react';
import { FaSistrix } from 'react-icons/fa';

import PropTypes from 'prop-types';
import css from './Serchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onInput = event => {
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    event.currentTarget.reset();
  };

  render() {
    return (
      <header className={css.searchbar__container}>
        <form className={css.searchbar__form} onSubmit={this.onSubmit}>
          <button type="submit" className={css.searchbar__button}>
            <FaSistrix className={css.searchbar__icon} />
          </button>

          <input
            className={css.searchbar__input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
