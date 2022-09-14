import { Component } from '@angular/core';
import { ConsoletoggleService } from './services/consoletoggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuvalence-address-book';
  
  constructor(
    private consoleToggleService: ConsoletoggleService) {
    this.consoleToggleService.disableForProduction();
  }
}
