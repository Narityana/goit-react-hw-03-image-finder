import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <ul class={css.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
