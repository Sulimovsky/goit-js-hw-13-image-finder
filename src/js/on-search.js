import { getImages } from './apiService';
import refs from './refs';
import appendMarkup from '../templates/markup.hbs';
import onError from './onError';


refs.form.addEventListener('submit', onSearchImages);
refs.btnLoad.classList.add('visually-hidden');

//refs.btnLoad.addEventListener('click', onClickLoad); //кнопка лоадер

const observer = new IntersectionObserver(infiniteScroll, { threshold: 0.1 });
observer.observe(refs.target);


let page = 1;
let search;

function onSearchImages(e) {
    e.preventDefault();
    search = refs.input.value;
    page = 1;

    if (search === '') {
        onError();
        return;
    }
    if (search.length <= 1) {
        onError();
        return;
    }
    getImages(search, page)
    .then(img => {
        if (img.data.hits.length <= 1) {
            onError();
            refs.target.classList.remove('btn-load--spinner');
            return;
        }
        refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));
        refs.target.classList.add('btn-load--spinner');

        //refs.btnLoad.classList.remove('visually-hidden'); //кнопка лоадер
    })
    .catch(console.log);

    refs.gallery.innerHTML = '';
};


function infiniteScroll() {
    page += 1;

    getImages(search, page) 
    .then(img => {
        refs.gallery.insertAdjacentHTML('beforeend', appendMarkup(img.data.hits));
    })
    .catch((err) => {
        console.log(err);
        refs.target.classList.remove('btn-load--spinner');
    });
}

export default infiniteScroll;







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