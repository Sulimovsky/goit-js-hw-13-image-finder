import refs from './refs';
import infiniteScroll from './on-search';

const observer = new IntersectionObserver(infiniteScroll, { threshold: 0.1 });
observer.observe(refs.target);