import { RobpoolPage } from './app.po';

describe('robpool App', function() {
  let page: RobpoolPage;

  beforeEach(() => {
    page = new RobpoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
