import { Component, Input } from '@angular/core';
import { ApplicationAccount } from 'src/app/shared/classes/ApplicationAccount';

@Component({
  selector: 'app-card-application-account',
  templateUrl: './card-application-account.component.html',
  styleUrls: ['./card-application-account.component.scss'],
})
export class CardApplicationAccountComponent {
  @Input() applicationAccount: ApplicationAccount;

  constructor() {
    this.applicationAccount = new ApplicationAccount();
  }

}
