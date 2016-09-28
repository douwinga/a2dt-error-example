import { Angular2DataTableErrorPage } from './app.po';

describe('angular2-data-table-error App', function() {
  let page: Angular2DataTableErrorPage;

  beforeEach(() => {
    page = new Angular2DataTableErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
