import { reducer } from './book.reducer';
import { loadBooks } from './book.actions';

describe('Book Reducer', () => {

  it('should enable the loading flag', () => {
    const state = {
      books: [],
      loading: false
    };
    const action = loadBooks();

    const newState = reducer(state, action); 
    expect(newState.loading).toBe(true);
  });
});
