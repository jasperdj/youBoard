import {EdhDashboardFrontendPage} from './app.po';

describe('edh-dashboard-frontend App', () => {
  let page: EdhDashboardFrontendPage;

  beforeEach(() => {
    page = new EdhDashboardFrontendPage();
  });

  page.navigateTo();
  it('should display message saying app works', () => {

    expect(page.getParagraphText()).toEqual('app works!');
  });
});
