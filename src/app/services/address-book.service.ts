import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactResponse } from '../models/contact_response';

const routes = {
  get_contacts: () => `https://randomuser.me/api/?page=1&results=50&seed=nuvalence`
}

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(routes.get_contacts());
  }
}
