import { browser, by, element } from 'protractor';

export class CollectorPage {
  navigateTo(): any {
    return browser.get(browser.baseUrl + '/collectors') as Promise<any>;
  }

  getCollectorList(): any {
    return element
      .all(by.css('.container-collector .card-title'))
      .last()
      .getText();
  }
}
