import { Component, Input } from '@angular/core';
import { CurrentAccount } from 'src/app/shared/classes/CurrentAccount';

@Component({
  selector: 'app-card-current-account',
  templateUrl: './card-current-account.component.html',
  styleUrls: ['./card-current-account.component.scss']
})
export class CardCurrentAccountComponent {
  @Input() currentAccount: CurrentAccount;

  constructor() {
    this.currentAccount = new CurrentAccount();
  }

}
