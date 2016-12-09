import { ReactiveDemoPage } from './app.po';

describe('reactive-demo App', function() {
  let page: ReactiveDemoPage;

  beforeEach(() => {
    page = new ReactiveDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
