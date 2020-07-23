import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromBook from './book.reducer';

import * as BookActions from './book.actions';
import { BookStoreService } from '../../shared/book-store.service';
import { Store } from '@ngrx/store';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      withLatestFrom(this.store$),
      map(([action, state]) => state.book.books.length),
      filter(length => !length),
      switchMap(() => this.bs.getAll().pipe(
        map(books => BookActions.loadBooksSuccess({ data: books })),
        catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private store$: Store<{ book: fromBook.State }>
  ) {}
}
