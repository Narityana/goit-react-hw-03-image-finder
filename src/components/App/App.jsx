import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import fetchImages from 'service/Api';

import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    searchQuery: '',
    showModal: false,
    selectedImage: null,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    if (page !== prevState.page || searchQuery !== prevState.searchQuery) {
      this.setState({ isLoading: true });

      try {
        this.setState({ isLoading: true });
        const imageData = await fetchImages(searchQuery, page);
        if (imageData.totalHits === 0) {
          toast.warning(
            'No results were found for your search, please try something else.'
          );
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...imageData.hits],
          totalHits: imageData.totalHits,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState(prevState => ({
          isLoading: false,
          loadMore: prevState.page < Math.ceil(prevState.totalHits / 12),
        }));
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
    });
  };

  onSelectedImage = largeImageURL => {
    this.setState({
      selectedImage: largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showModal, loadMore, isLoading } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.selectedImage}
          />
        )}
        <ImageGallery
          images={this.state.images}
          onSelectedImage={this.onSelectedImage}
        />
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.onLoadMoreClick} />}
      </div>
    );
  }
}
