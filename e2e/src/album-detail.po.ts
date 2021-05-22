import { browser, by, element } from 'protractor';

export class AlbumDetailPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/albums/detail/100') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  showAlbumDetail() {
    return element(by.css('app-album-detail .container h4')).getText();
  }
}
