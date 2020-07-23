import * as fromBook from './book.actions';

// as it is written in the book, we think this kind of test is too trivial
describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBook.loadBooks().type).toBe('[Book] Load Books');
  });
});
