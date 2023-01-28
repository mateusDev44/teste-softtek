import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Inicio', routerLink: 'inicial'},
      { label: 'Documentos' },
      { label: 'Dados Cadastrais' },
      { label: 'Admissão' },
    ];
  }


}
