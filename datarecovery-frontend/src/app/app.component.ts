import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {User} from './model/model';
@Component({
  selector: 'app-root',
  template: `
    <app-navigation [currentUser]="this.currentUser" (logout)="logout()"></app-navigation>
  `,
  styles: [``]
})
export class AppComponent {
  currentUser: User;
  title = 'datarecovery-frontend';
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout(): void{
    this.authenticationService.logout();
  }
}
