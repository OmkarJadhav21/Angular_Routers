import { AngularRoutersPage } from './app.po';

describe('angular-routers App', () => {
  let page: AngularRoutersPage;

  beforeEach(() => {
    page = new AngularRoutersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
