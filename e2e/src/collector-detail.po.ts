import { browser, by, element } from 'protractor';

export class CollectorDetailPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/collectors/100') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  showCollectorDetail() {
    return element(by.css('.container-collector h1')).getText();
  }
}
