import { MovieAppAngularCliPage } from './app.po';

describe('movie-app-angular-cli App', function() {
  let page: MovieAppAngularCliPage;

  beforeEach(() => {
    page = new MovieAppAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
