import { Angular2CliSeedPage } from './app.po';

describe('angular2-cli-seed App', function() {
  let page: Angular2CliSeedPage;

  beforeEach(() => {
    page = new Angular2CliSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
