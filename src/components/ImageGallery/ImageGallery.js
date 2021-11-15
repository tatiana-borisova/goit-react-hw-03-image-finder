import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { toast } from 'react-toastify';
import s from './ImageGallery.module.css';

const API_KEY = '23600792-c35e54b22aba5a82a8a51cd77';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    result: [],
    loading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${nextName}&page=${this.state.page}&per_page=12&key=${API_KEY}`;

    if (prevName !== nextName) {
      this.setState({ loading: true });

      try {
        await fetch(url)
          .then(response => response.json())
          .then(({ hits }) => {
            if (hits.length > 0) {
              return this.setState({ result: hits });
            }

            return Promise.reject(
              new Error(`No images found for "${nextName}". Try again.`),
            );
          })
          .finally(() => this.setState({ loading: false }));
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  render() {
    const { loading, result } = this.state;
    return (
      <>
        {loading && <h1>Loading...</h1>}
        {result && (
          <ul className={s.gallery}>
            {result.map(image => (
              <li key={image.id} className={s.item}>
                <ImageGalleryItem src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
