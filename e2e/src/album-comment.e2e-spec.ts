import { AlbumCommentPage } from './album-comment.po';
import { browser, logging } from 'protractor';

describe('Add Album Comment', () => {
  let page: AlbumCommentPage;

  beforeEach(() => {
    page = new AlbumCommentPage();
  });

  it('should album comment addition', () => {
    page.navigateTo();
    page.clickListComment();
    page.setCollector();
    page.setDescription('test comment');
    page.setRating(5);
    page.clickAddNewComment();

    expect(page.getCommentList()).toContain('test comment');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
