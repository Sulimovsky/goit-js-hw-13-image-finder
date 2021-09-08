import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <img src="" width="800" height="600" class="imageBox">
`);
const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', showBox);
function showBox(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  instance.show();

  const backdropImageRef = document.querySelector('.imageBox');

  backdropImageRef.src = e.target.dataset.source;
}
