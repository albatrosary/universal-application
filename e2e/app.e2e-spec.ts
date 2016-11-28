import { UniversalApplicationPage } from './app.po';

describe('universal-application App', function() {
  let page: UniversalApplicationPage;

  beforeEach(() => {
    page = new UniversalApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
