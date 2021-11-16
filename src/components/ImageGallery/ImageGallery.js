import { Component } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.css';
import fetchAPI from '../../services/fetchApi';
import ImageGalleryItem from '../ImageGalleryItem';
import ImagePendingView from '../ImagePendingView';
import Button from '../Button';

const API_KEY = '23600792-c35e54b22aba5a82a8a51cd77';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    result: [],
    showButton: false,
    showLoader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${nextQuery}&page=1&per_page=12&key=${API_KEY}`;

    if (prevQuery !== nextQuery) {
      this.setState({
        result: [],
        showButton: false,
        showLoader: true,
        page: 2,
      });

      try {
        const { hits } = await fetchAPI(url);

        if (hits.length === 0) {
          throw new Error(`No images found for "${nextQuery}". Try again.`);
        }

        if (hits.length < 12) {
          this.setState({
            showLoader: false,
            showButton: false,
            result: hits,
          });
          throw new Error(
            `No more images found for "${this.props.searchQuery}".`,
          );
        }

        this.setState({ showButton: true, showLoader: false, result: hits });
      } catch (error) {
        toast.error(error.message);
        this.setState({ showLoader: false });
      }
    }
  }

  onButtonClick = async () => {
    this.setState({
      showLoader: true,
    });
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.props.searchQuery}&page=${this.state.page}&per_page=12&key=${API_KEY}`;

    try {
      const { hits } = await fetchAPI(url);

      if (hits.length === 0) {
        this.setState({ showLoader: false, showButton: false });
        throw new Error(
          `No more images found for "${this.props.searchQuery}".`,
        );
      }

      if (hits.length < 12) {
        this.setState(prevState => ({
          showLoader: false,
          showButton: false,
          result: [...prevState.result, ...hits],
        }));
        throw new Error(
          `No more images found for "${this.props.searchQuery}".`,
        );
      }

      this.setState(prevState => ({
        showButton: true,
        showLoader: false,
        result: [...prevState.result, ...hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      toast.error(error.message);
      this.setState({ showLoader: false });
    }
  };

  render() {
    const { result, showButton, showLoader } = this.state;

    return (
      <div>
        <ul className={s.gallery}>
          {result.map(image => (
            <li key={image.id} className={s.item}>
              <ImageGalleryItem src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
          {showLoader &&
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((image, index) => (
              <li key={index} className={s.item}>
                <ImagePendingView />
              </li>
            ))}
        </ul>
        {showLoader && (
          <Loader
            type="ThreeDots"
            color="#995471"
            height={100}
            width={100}
            style={{ textAlign: 'center' }}
          />
        )}
        {showButton && <Button onClick={this.onButtonClick} />}
      </div>
    );
  }
}
