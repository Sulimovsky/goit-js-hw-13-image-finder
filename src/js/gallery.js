import * as basicLightbox from 'basiclightbox';
import { getIdApi } from './apiService';
import refs from './refs';

refs.gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.id) {
        const idNum = e.target.id;
        getIdApi(idNum).then(res => {
            const instance = basicLightbox.create(`<img src="${res.data.hits[0].largeImageURL}" alt="${res.data.hits[0].tags}">`, {
                onShow: instance => {
                    window.addEventListener('keydown', (e) => {
                        if (e.code === 'Escape') {
                            instance.close();
                        }
                    })
                }
            })
            instance.show();
        })
    }
}