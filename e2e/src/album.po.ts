import { browser, by, element } from 'protractor';

export class AlbumPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/albums') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  getAlbumsList() {
    return element.all(by.css('.albums app-album-item div')).last().getText();
  }
}
