import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AddressBookService } from 'src/app/services/address-book.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.currentWindowWidth = event.target.innerWidth;
  }
  @ViewChild('listContainer', { static: false }) listContainer: ElementRef;

  constructor(
    private addressBookService: AddressBookService,
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contacts: Contact[] = [];
  collectedContacts: Contact[] = [];
  selectedRowId: number;
  currentWindowWidth: number;
  errorStatus: boolean = false;
  loading: boolean;
  pageNumber: number = 1;
  maxPageNumber: number;

  selectContact(contact) {
    this.navigationService.savedContactList = this.collectedContacts;
    this.navigationService.savedPageInfo = {
      pageNumber: this.pageNumber,
      maxPageNumber: this.maxPageNumber
    }
    this.router.navigate(['../detail-page'], {
      relativeTo: this.route,
      state: { 
        selectContact: contact,
        collectedContactList: this.collectedContacts,
        pageNumber: this.pageNumber }
    });
  }

  paginate(pageUp: boolean) {
    if (pageUp) {
      this.paginateContacts(this.pageNumber + 1);
      this.pageNumber++;
    } else {
      this.paginateContacts(this.pageNumber - 1);
      this.pageNumber--;
    }
  }

  paginateContacts(pageNumber: number) {
    const firstEntryNumber = (pageNumber - 1) * 10;
    const lastEntryNumber = (pageNumber * 10); 
    this.contacts = this.collectedContacts.slice(firstEntryNumber, lastEntryNumber);
  }

  getContacts() {
    this.contacts.length = 0;
    this.loading = true;
    this.errorStatus = false;
    this.addressBookService.getContacts().subscribe(
      (response) => {
        this.loading = false;
        this.collectedContacts = response.results;
        this.maxPageNumber = Math.ceil(this.collectedContacts.length / 10);
        this.paginateContacts(this.pageNumber);
        this.listContainer.nativeElement.classList.add('card-content');

      },
      (error) => {
        console.log("ERROR", error);
        this.loading = false;
        this.errorStatus = true;
      }
    );
  }


  ngOnInit(): void {
    this.loading = true;
    this.currentWindowWidth = window.innerWidth;
    
    if (history.state.collectedContactList) {
      this.collectedContacts = history.state.collectedContactList;
      this.pageNumber = history.state.savedPageInfo.pageNumber;
      this.maxPageNumber = history.state.savedPageInfo.maxPageNumber;
      this.paginateContacts(this.pageNumber);
      this.loading = false;
    } else {
      this.getContacts(); 
    }


  }

}
