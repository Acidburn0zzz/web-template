import style from './main.less';
import Promise from 'bluebird';

style; // "Use" the style variable

export default class MainApp {
  constructor(params) {
    this._params = params;
  }

  get params() {
    return this._params;
  }

  render() {
    return new Promise(res => {
      let el = this._params.el;
      el.empty();
      el.append(this._params.welcome);
    });
  }
}