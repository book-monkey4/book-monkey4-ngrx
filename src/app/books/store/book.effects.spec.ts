import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { BookEffects } from './book.effects';
import { of } from 'rxjs';
import { loadBooks, loadBooksSuccess } from './book.actions';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Book } from 'src/app/shared/book';
import { Action } from '@ngrx/store';

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
            getAll: () => []
          }
        }
      ]
    });

    effects = TestBed.inject<BookEffects>(BookEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  it('should load all books via BookStoreService', () => {
    actions$ = of(loadBooks());

    const testBooks = [{ isbn: 'X' }] as Book[];
    const bs = TestBed.inject(BookStoreService);
    spyOn(bs, 'getAll').and.callFake(() => of(testBooks));

    let dispatchedAction: Action;
    effects.loadBooks$.subscribe(action => dispatchedAction = action);

    expect(dispatchedAction).toEqual(loadBooksSuccess({ data: testBooks }));
  });
});
