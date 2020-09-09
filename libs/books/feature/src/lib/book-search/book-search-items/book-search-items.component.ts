import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ReadingListBook } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-book-search-items',
  templateUrl: './book-search-items.component.html',
  styleUrls: ['./book-search-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchItemsComponent implements OnInit {
  @Input() book: ReadingListBook;
  @Output() addedBookToReadingList = new EventEmitter<ReadingListBook>();

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: ReadingListBook) {
    this.addedBookToReadingList.emit(book);
  }
}