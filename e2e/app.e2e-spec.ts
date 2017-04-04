import { RecipeAppNg4Page } from './app.po';

describe('recipe-app-ng4 App', () => {
  let page: RecipeAppNg4Page;

  beforeEach(() => {
    page = new RecipeAppNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
