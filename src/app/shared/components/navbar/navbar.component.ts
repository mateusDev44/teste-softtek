import { Component } from '@angular/core';
import { Menu } from '../../classes/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuResponsive: boolean = false;
  options: Menu[] = [
    { icon: 'fa-solid fa-bars', route: '' },
    { icon: 'fa-solid fa-magnifying-glass', route: '' },
    { icon: 'fa-regular fa-star', route: '' },
    { icon: 'fa-regular fa-message', route: '' },
    { icon: 'fa-solid fa-list', route: '' },
    { icon: 'fa-solid fa-building-columns', route: '' },
  ];
}
