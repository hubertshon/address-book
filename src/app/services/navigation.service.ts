import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactResponse } from '../models/contact_response';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  savedContactList: Contact[];
  savedContact: Contact;
  savedPageInfo: {
    pageNumber: number,
    maxPageNumber: number
  }


}
