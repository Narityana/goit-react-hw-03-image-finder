import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();

const Modal = () => {
  return (
    <div class={css.overlay}>
      <div class={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
