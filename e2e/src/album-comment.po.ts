import { browser, by, element } from 'protractor';

export class AlbumCommentPage {
  // tslint:disable-next-line: typedef
  navigateTo() {
    return browser.get(browser.baseUrl + '/albums/detail/100') as Promise<any>;
  }

  // tslint:disable-next-line: typedef
  setCollector() {
    element(by.css('select option:nth-child(1)')).click();
  }

  // tslint:disable-next-line: typedef
  setDescription(text: string) {
    element(by.id('description')).sendKeys(text);
  }

  // tslint:disable-next-line: typedef
  setRating(rating: number) {
    element(by.id('rating')).sendKeys(rating);
  }

  // tslint:disable-next-line: typedef
  clickAddNewComment() {
    element(by.id('btnAddNewComment')).click();
  }

  // tslint:disable-next-line: typedef
  clickListComment() {
    element(by.id('comments-list')).click();
  }

  // tslint:disable-next-line: typedef
  getCommentList() {
    return element.all(by.css('.forum-item .comment-post p')).last().getText();
  }
}
