import { PuskalwebsitePage } from './app.po';

describe('puskalwebsite App', () => {
  let page: PuskalwebsitePage;

  beforeEach(() => {
    page = new PuskalwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
