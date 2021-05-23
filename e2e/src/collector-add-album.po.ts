import { browser, by, element } from 'protractor';

export class CollectorAddAlbumPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(
      browser.baseUrl + '/collectors/100/add-album'
    ) as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  clickFirstAlbumButton() {
    element(by.id('collector-add-album-button-0')).click();
  }

  // tslint:disable-next-line: typedef
  getAlbumName() {
    return element
      .all(by.css('.collector-albums .single-news .details .album-title'))
      .first()
      .getText();
  }
}
