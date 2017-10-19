import { WindowAppPage } from './app.po';

describe('window-app App', () => {
  let page: WindowAppPage;

  beforeEach(() => {
    page = new WindowAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
