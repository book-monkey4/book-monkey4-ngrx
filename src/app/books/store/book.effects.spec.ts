import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { BookStoreService } from 'src/app/shared/book-store.service';

import { loadBooks, loadBooksSuccess } from './book.actions';
import { BookEffects } from './book.effects';
import { book } from './my-test-helper';


describe('BookEffects', () => {
  let actions$: Actions;
  let effects: BookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        provideMockActions(() => actions$),
        {
          provide: BookStoreService,
          useValue: {
            getAll: () => of([])
          }
        }
      ]
    });

    effects = TestBed.inject(BookEffects);
  });

  it('should fire loadBooksSuccess for loadBooks', () => {
    const books = [book(1), book(2), book(3)];
    const bs = TestBed.inject(BookStoreService);
    spyOn(bs, 'getAll').and.callFake(() => of(books));

    actions$ = of(loadBooks());
    let dispatchedAction: Action;
    effects.loadBooks$.subscribe(action => dispatchedAction = action);

    expect(dispatchedAction).toEqual(loadBooksSuccess({ data: books }));
    expect(bs.getAll).toHaveBeenCalled();
  });
});
