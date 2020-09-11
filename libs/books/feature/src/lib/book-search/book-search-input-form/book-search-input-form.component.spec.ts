import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchInputFormComponent } from './book-search-input-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BooksFeatureModule } from '../../books-feature.module';
import { SharedTestingModule } from '@tmo/shared/testing';

describe('BookSearchInputFormComponent', () => {
  let component: BookSearchInputFormComponent;
  let fixture: ComponentFixture<BookSearchInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule, NoopAnimationsModule]
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