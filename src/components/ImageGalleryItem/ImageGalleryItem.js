import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => {
  return <img className={s.image} src={src} alt={alt} />;
};

export default ImageGalleryItem;
