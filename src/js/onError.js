import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';

export default function onError() {
    error({
        title: 'Ошибка!',
        text: 'Введите валидный запрос.',
        width: '360px',
        maxTextHeight: null,
        animateSpeed: 'normal',
        shadow: true,
        delay: 500,
        icon: true,
    });
}