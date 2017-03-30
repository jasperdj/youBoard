import { EdhDashboardFrontendPage } from './app.po';

describe('edh-dashboard-frontend App', () => {
  let page: EdhDashboardFrontendPage;

  beforeEach(() => {
    page = new EdhDashboardFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
