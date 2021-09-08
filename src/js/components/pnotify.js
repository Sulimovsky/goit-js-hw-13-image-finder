import { info, success, notice } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default class Pnotify {
  constructor() {}

  getInfo(text) {
    info({
      text: text,
      delay: 1000,
    });
  }
  getSuccess(text) {
    success({
      text: text,
      delay: 1000,
    });
  }
}
