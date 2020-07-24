import { async, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [{
            selector: selectBooksLoading,
            value: true
          }, {
            selector: selectAllBooks,
            value: []
          }]
        })
      ]
    }).compileComponents();
  }));

  it('should show a loading text', () => {
    const fixture = TestBed.createComponent(BookListComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.text.loader').textContent)
      .toContain('Daten werden geladen...');
  });
});
