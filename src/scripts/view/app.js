import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import { notFoundPageTemplate } from './templates/template-creators';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // eslint-disable-next-line consistent-return
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (!url) {
      this._content.innerHTML = notFoundPageTemplate(error);
    } else {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default App;