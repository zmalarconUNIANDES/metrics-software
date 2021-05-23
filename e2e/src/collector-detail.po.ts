import { browser, by, element } from 'protractor';

export class CollectorDetailPage {
  navigateTo(): any {
    return browser.get(browser.baseUrl + '/collectors/100') as Promise<any>;
  }

  showCollectorDetail(): any {
    return element(by.css('.container-collector h1')).getText();
  }
}
