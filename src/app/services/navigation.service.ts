import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';


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
