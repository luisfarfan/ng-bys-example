import { ProjectPruebaPage } from './app.po';

describe('project-prueba App', () => {
  let page: ProjectPruebaPage;

  beforeEach(() => {
    page = new ProjectPruebaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
