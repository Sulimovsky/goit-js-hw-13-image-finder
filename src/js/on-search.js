import { getImages } from './apiService';
import refs from './refs';
import appendMarkup from '../templates/markup.hbs';


refs.form.addEventListener('submit', onSearchImages);
// refs.btnLoad.addEventListener('click', onClickLoad); кнопка лоадер
refs.btnLoad.classList.add('visually-hidden');

const targetEl = document.querySelector('.centered');
const observer = new IntersectionObserver(infiniteScroll, { threshold: 1 });
observer.observe(targetEl);

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

        // refs.btnLoad.classList.remove('visually-hidden'); кнопка лоадер
    })
    .catch(console.log);

    refs.gallery.innerHTML = '';
};

function infiniteScroll(entries) {
    page += 1;
    console.log(page);
    console.log(entries);
    getImages(search, page) 
    .then(img => {
        refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));
    })
    .catch(console.log);
}


// кнопка лоадер
// function onClickLoad() {
//     page += 1;
//     refs.btnLoad.classList.add('btn-load--spinner');
//     refs.btnLoad.disabled = true;

//     getImages(search, page)
//     .then(img => {
//         refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));

//         refs.btnLoad.classList.remove('btn-load--spinner');
//         refs.btnLoad.disabled = false;
        
//         refs.body.scrollIntoView({
//             behavior: 'smooth',
//             block: 'end',
//         });
//     })
//     .catch(console.log);
// }
















// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок








