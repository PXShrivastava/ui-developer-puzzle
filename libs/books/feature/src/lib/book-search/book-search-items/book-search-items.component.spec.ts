import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchItemsComponent } from './book-search-items.component';

describe('BookSearchResultsItemComponent', () => {
  let component: BookSearchItemsComponent;
  let fixture: ComponentFixture<BookSearchItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});