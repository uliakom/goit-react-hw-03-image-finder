import PropTypes from 'prop-types';
import { ImageContainer } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageContainer>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          openModal={() => onClick(largeImageURL, tags)}
        />
      ))}
    </ImageContainer>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
