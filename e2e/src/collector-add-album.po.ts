import { browser, by, element } from 'protractor';

export class CollectorAddAlbumPage {
  navigateTo(): any {
    return browser.get(
      browser.baseUrl + '/collectors/100/add-album'
    ) as Promise<any>;
  }

  clickFirstAlbumButton(): void {
    element(by.id('collector-add-album-button-0')).click();
  }

  getAlbumName(): any {
    return element
      .all(by.css('.collector-albums .single-news .details .album-title'))
      .first()
      .getText();
  }
}
