import { browser, by, element } from 'protractor';

export class CollectorAddMusicianPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/collectors/100/add') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  clickFirstArtistButton() {
    element(by.id('collector-add-button-0')).click();
  }

  // tslint:disable-next-line: typedef
  getArtistName() {
    return element
      .all(by.css('.favourite-artists .card .card-title'))
      .last()
      .getText();
  }
}
