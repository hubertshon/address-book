import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.currentWindowWidth = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) { }

 contact: Contact;
 currentWindowWidth: number;


 navigateBack() {
  this.router.navigate(['../list-page'], { 
    relativeTo: this.route,
    state: { 
      collectedContactList: this.navigationService.savedContactList,
      savedPageInfo:  this.navigationService.savedPageInfo }
  });
 }

  ngOnInit(): void {
    if (history.state.selectContact) {
      this.contact = history.state.selectContact;
    }
    this.currentWindowWidth = window.innerWidth;
  }

}
