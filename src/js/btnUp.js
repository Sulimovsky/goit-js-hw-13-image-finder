import refs from './refs';

window.addEventListener('scroll', heightScroll);
refs.btnUp.addEventListener('click', scrollUp);

refs.btnUp.classList.add('visually-hidden');

function heightScroll() {
    pageYOffset > 600 ?
    refs.btnUp.classList.remove('visually-hidden') :
    refs.btnUp.classList.add('visually-hidden')
}

function scrollUp() {
    console.log('asdad');
    const element = document.getElementById('target-up');
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
}

