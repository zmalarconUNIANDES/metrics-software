import { browser, by, element } from 'protractor';

export class CollectorPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/collectors') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  getCollectorList() {
    return element
      .all(by.css('.container-collector .card-title'))
      .last()
      .getText();
  }
}
