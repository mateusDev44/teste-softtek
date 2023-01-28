import { Component } from '@angular/core';
import { Menu } from '../../classes/Menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  options: Menu[] = [
    { icon: 'fa-solid fa-bars', route: '' },
    { icon: 'fa-solid fa-magnifying-glass', route: '' },
    { icon: 'fa-regular fa-star', route: '' },
    { icon: 'fa-regular fa-message', route: '' },
    { icon: 'fa-solid fa-list', route: '' },
    { icon: 'fa-solid fa-building-columns', route: '' },
  ];

}
