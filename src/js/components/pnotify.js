import { info, success, notice } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default class Pnotify {
  constructor() {}

  getInfo(text) {
    info({
      text: text,
      delay: 500,
    });
  }
  getSuccess(text) {
    success({
      text: text,
      delay: 500,
    });
  }
  getNotice(text) {
    notice({
      text: text,
      delay: 500,
    });
  }
}