import ImageGalleryItem from '../ImageGalleryItem';
import pendingImage from '../../images/pendingImage.jpg';

const ImagePendingView = () => {
  const image = {
    webformatURL: pendingImage,
    tags: 'pending',
    dataAction: pendingImage,
  };

  return (
    <>
      <ImageGalleryItem src={image.webformatURL} alt={image.tags} />
    </>
  );
};

export default ImagePendingView;
