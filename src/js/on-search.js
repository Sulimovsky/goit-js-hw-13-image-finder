import { getImages } from './apiService';
import refs from './refs';
import appendMarkup from '../templates/markup.hbs';


refs.form.addEventListener('submit', onSearchImages);
refs.btnLoad.addEventListener('click', onClickLoad);
refs.btnLoad.classList.add('visually-hidden');

let page = 1;
let search;

function onSearchImages(e) {
    e.preventDefault();
    search = refs.input.value;
    page = 1;

    getImages(search, page)
    .then(img => {
        console.log(img);
        refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));
        refs.btnLoad.classList.remove('visually-hidden');
    })
    .catch(console.log);

    refs.gallery.innerHTML = '';
};

function onClickLoad() {
    page += 1;
    refs.btnLoad.classList.add('btn-load--spinner');
    refs.btnLoad.disabled = true;

    getImages(search, page)
    .then(img => {
        refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));

        refs.btnLoad.classList.remove('btn-load--spinner');
        refs.btnLoad.disabled = false;
        
        refs.body.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    })
    .catch(console.log);
}
















// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок








