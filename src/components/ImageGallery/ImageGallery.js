import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSpinner } from 'react-icons/im';
import s from './ImageGallery.module.css';
import fetchAPI from '../../services/fetchApi';
import ImageGalleryItem from '../ImageGalleryItem';
import ImagePendingView from '../ImagePendingView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};
const API_KEY = '23600792-c35e54b22aba5a82a8a51cd77';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    result: [],
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${nextQuery}&page=${this.state.page}&per_page=12&key=${API_KEY}`;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      try {
        const { hits } = await fetchAPI(url);
        if (hits.length === 0) {
          throw new Error(`No images found for "${nextQuery}". Try again.`);
        }

        this.setState({ result: hits, status: Status.RESOLVED });
      } catch (error) {
        toast.error(error.message);
        this.setState({ status: Status.IDLE });
      }
    }
  }

  render() {
    const { result, status } = this.state;

    if (status === Status.IDLE) {
      return <div></div>;
    }

    if (status === Status.PENDING) {
      return (
        <>
          <ul className={s.gallery}>
            {result.map(image => (
              <li key={image.id} className={s.item}>
                <ImagePendingView />
              </li>
            ))}
          </ul>
          <ImSpinner size="32" />
        </>
      );
    }

    if (status === Status.RESOLVED) {
      return (
        <ul className={s.gallery}>
          {result.map(image => (
            <li key={image.id} className={s.item}>
              <ImageGalleryItem src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
        </ul>
      );
    }
  }
}
