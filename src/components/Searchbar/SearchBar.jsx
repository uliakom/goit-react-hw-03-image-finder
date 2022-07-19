import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBarHeader, SearchForm, Button, Input } from './Searchbar.styled';
import { BsZoomIn } from 'react-icons/bs';
import { Report } from 'notiflix/build/notiflix-report-aio';

class SearchBar extends Component {
  state = { searchQuery: '' };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      Report.failure('Search Failure', 'Please enter seach query', 'Ok');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { handleSubmit, handleNameChange } = this;
    const { searchQuery } = this.state;
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={handleNameChange}
          />
          <Button type="submit">
            <BsZoomIn />
          </Button>
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
