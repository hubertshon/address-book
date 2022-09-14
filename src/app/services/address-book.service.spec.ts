import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressBookService } from './address-book.service';

describe('AddressBookService', () => {
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
