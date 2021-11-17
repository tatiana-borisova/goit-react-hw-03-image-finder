import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import fetchAPI from './services/fetchApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Status = {
  IDLE: 'idle', //обa false
  RESOLVED: 'resolved', //loader false, button true
  PENDING: 'pending', //loader true, button false
};
const API_KEY = '23600792-c35e54b22aba5a82a8a51cd77';
const BASE_URL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    result: [],
    showModal: false,
    status: Status.IDLE,
    largeImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = searchQuery;
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${nextQuery}&page=1&per_page=12&key=${API_KEY}`;

    if (prevQuery !== nextQuery) {
      this.setState({
        result: [],
        status: Status.PENDING,
        page: 2,
      });

      try {
        const { hits } = await fetchAPI(url);

        if (hits.length === 0) {
          throw new Error(`No images found for "${nextQuery}". Try again.`);
        }

        if (hits.length < 12) {
          this.setState({
            result: hits,
          });
          throw new Error(`No more images found for "${searchQuery}".`);
        }

        this.setState({ status: Status.RESOLVED, result: hits });
      } catch (error) {
        toast.error(error.message);
        this.setState({ status: Status.IDLE });
      }
    }
  }

  onButtonClick = async () => {
    const { searchQuery, page } = this.state;

    this.setState({
      status: Status.PENDING,
    });
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`;

    try {
      const { hits } = await fetchAPI(url);

      if (hits.length === 0) {
        throw new Error(`No more images found for "${searchQuery}".`);
      }

      if (hits.length < 12) {
        this.setState(prevState => ({
          result: [...prevState.result, ...hits],
        }));
        throw new Error(`No more images found for "${searchQuery}".`);
      }

      this.setState(prevState => ({
        status: Status.RESOLVED,
        result: [...prevState.result, ...hits],
        page: prevState.page + 1,
      }));
      window.scrollBy({ top: 1000, behavior: 'smooth' });
    } catch (error) {
      toast.error(error.message);
      this.setState({ status: Status.IDLE });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = largeImage => {
    this.setState(prevState => ({
      largeImage,
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { result, status, showModal, largeImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery result={result} onClick={this.toggleModal} />
        {status === Status.RESOLVED && <Button onClick={this.onButtonClick} />}
        {status === Status.PENDING && (
          <Loader
            type="ThreeDots"
            color="#995471"
            width={100}
            style={{ textAlign: 'center' }}
          />
        )}
        {showModal && (
          <Modal largeImage={largeImage} onClick={this.toggleModal} />
        )}
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }
}

export default App;
