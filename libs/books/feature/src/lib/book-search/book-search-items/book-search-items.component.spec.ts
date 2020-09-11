import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchItemsComponent } from './book-search-items.component';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../../books-feature.module';
import { ReadingListBook } from '@tmo/books/data-access';

describe('BookSearchItemsComponent', () => {
  let component: BookSearchItemsComponent;
  let fixture: ComponentFixture<BookSearchItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchItemsComponent);
    component = fixture.componentInstance;

    const book: ReadingListBook = {
      id: '1',
      title: 'My Book',
      authors: ['Author, First', 'Author, Second'],
      description: 'This is my test book',
      isAdded: false
     };

    component.book = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});