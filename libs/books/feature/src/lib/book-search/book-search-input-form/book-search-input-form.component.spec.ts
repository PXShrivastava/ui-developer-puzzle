import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchInputFormComponent } from './book-search-input-form.component';

describe('BookSearchFormComponent', () => {
  let component: BookSearchInputFormComponent;
  let fixture: ComponentFixture<BookSearchInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});