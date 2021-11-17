import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ result }) => {
  return (
    <ul className={s.gallery}>
      {result.map(image => (
        <li key={image.id} className={s.item}>
          <ImageGalleryItem src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
