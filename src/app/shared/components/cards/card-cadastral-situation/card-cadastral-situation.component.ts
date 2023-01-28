import { Component, Input } from '@angular/core';
import { Cooperated } from 'src/app/shared/classes/Cooperated';

@Component({
  selector: 'app-card-cadastral-situation',
  templateUrl: './card-cadastral-situation.component.html',
  styleUrls: ['./card-cadastral-situation.component.scss'],
})
export class CardCadastralSituationComponent {
  @Input() cooperated: Cooperated;

  constructor() {
    this.cooperated = new Cooperated();
  }

}
