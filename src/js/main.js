import apiImages from './components/apiService';
import templateGallery from '../templates/gallery.hbs';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadMore from './components/buttonLoad';
import 'material-design-icons/iconfont/material-icons.css';
import './components/basiclightbox';
import Pnotify from './components/pnotify';

let flag = false;
const newApiImages = new apiImages();
const newPnotify = new Pnotify();
const loadMoreButton = new LoadMore({
  selector: '.load-more',
  hidden: true,
});
const refs = {
  galleryList: document.querySelector('.gallery'),
  input: document.querySelector('.search-form'),
  buttonSubmit: document.querySelector('.search-form__submit'),
};

refs.input.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', () => {
  fetchImages();
  flag = true;
});

function onSearch(e) {
  e.preventDefault();
  newPnotify.getInfo('Загружено 12 картинок');

  newApiImages.query = e.currentTarget.elements.query.value;
  loadMoreButton.show();

  newApiImages.resetPage();
  clearGallery();
  fetchImages();
}

function fetchImages() {
  loadMoreButton.disable();

  newApiImages.fetchApiService().then(img => {
    appendImagesMarkup(img);

    loadMoreButton.enable();
    scrollImages();
  });
}

function appendImagesMarkup(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', templateGallery(images));
}

function clearGallery() {
  refs.galleryList.innerHTML = '';
}

function scrollImages() {
  if (!flag) {
    return;
  }
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
  newPnotify.getSuccess('Страничка проскролилась');
}
