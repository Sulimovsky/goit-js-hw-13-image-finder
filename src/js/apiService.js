// 1) Написать html and css +
// 2) Установить аксиос +
// 3) Подключить и выставить иконки +
// 3) Настроить и стилизировать карточки +
// 4) Cделать шаблон +
// 5) Сделать спиннер +
// 6) Бесконечний скрол +
// 7) Нотифай +
// 8) Galerry basic light box +
// 9) upp btn +

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=23597870-e543dfa35b3f83e92b336bdec&image_type=photo&orientation=horizontal&per_page=6';

export async function getImages(search, page) {
    try {
        const response = await axios.get(`${BASE_URL}&page=${page}&q=${search}`);
        return response;
    } catch (error) {
        return error;
    }
};

export async function getIdApi(idNum) {
    try {
        const response = await axios.get(`${BASE_URL}&id=${idNum}`);
        return response;
    } catch(err) {
        return err;
    }
}