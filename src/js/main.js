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
  buttonLoadMore: document.querySelector('.load-more'),
};

refs.input.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', () => {
  fetchImages();
  flag = true;
});

function onSearch(e) {
  e.preventDefault();

  newApiImages.query = e.currentTarget.elements.query.value;

  if (newApiImages.query === '') {
    newPnotify.getNotice('Введите валидный запрос')
    e.currentTarget.reset();
    return;
  } 

  newApiImages.resetPage();
  clearGallery();
  fetchImages();
  e.currentTarget.reset();
}

function fetchImages() {
  loadMoreButton.disable();

  newApiImages.fetchApiService().then(hitsLength).then(img => {
    appendImagesMarkup(img);
    loadMoreButton.enable();
    newPnotify.getInfo('Загружено 12 картинок');
    scrollImages();
  });
}

function appendImagesMarkup(images) { 
  if (images.length === 0) {
    return;
  }
  loadMoreButton.show();
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

function hitsLength(arr) {
  if (arr.length === 0) {
    newPnotify.getNotice('Введите валидный запрос');
    loadMoreButton.hide();
    return;
  }
  return arr;
}
