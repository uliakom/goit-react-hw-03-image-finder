import React, { Component } from 'react';
import { Container } from './App.styled';
import { Report, Block } from 'notiflix/build/notiflix-report-aio';
import { fetchImages } from 'services/api';
import SearchBar from 'components/Searchbar/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { startLoader, stopLoader } from 'components/Loader';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    largeUrl: null,
    tag: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({ status: 'pending' });

      try {
        const response = await fetchImages(searchQuery, page);
        this.setState(prevState => {
          return { hits: [...prevState.hits, ...response], status: 'resolved' };
        });
        stopLoader();
        console.log(response);
        if (response.length === 0) {
          Report.failure(
            'Search Failure',
            'There is no images for your query. Please enter other query',
            'Ok'
          );
          return;
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
        stopLoader();
        console.log(error);
      }
    }
  }

  handleSearch = searchName => {
    this.setState({ searchQuery: searchName, page: 1, hits: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onModalClose = () => {
    console.log('AAA');
    this.setState({ largeUrl: null, tag: null });
  };

  getUrl = (url, alt) => this.setState({ largeUrl: url, tag: alt });

  render() {
    const { hits, status, largeUrl, tag } = this.state;
    const { handleLoadMore, handleSearch, onModalClose, getUrl } = this;
    return (
      <Container>
        <SearchBar onSubmit={handleSearch} />
        {status === 'pending' && startLoader()}
        {status === 'resolved' && (
          <ImageGallery images={hits} onClick={getUrl} />
        )}
        {status === 'rejected' && (
          <h2>Ups... Something went wrong. Please try again later.</h2>
        )}
        {status === 'resolved' && hits.length > 0 && (
          <Button onClick={handleLoadMore} />
        )}
        {largeUrl && <Modal url={largeUrl} alt={tag} onClose={onModalClose} />}
      </Container>
    );
  }
}

export default App;
