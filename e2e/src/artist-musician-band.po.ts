import { browser, by, element } from 'protractor';

export class ArtistMusicianBandPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/artists/band/101') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  setMusician() {
    element(by.css('select option:nth-child(1)')).click();
  }

  // tslint:disable-next-line: typedef
  clickAddMusician() {
    element(by.id('btnAddMusician')).click();
  }

  // tslint:disable-next-line: typedef
  getMusicianList() {
    return element.all(by.css('.musician .comment-post p')).last().getText();
  }
}
