import { Component } from '@angular/core';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

const menuItems = [
  {
    name: 'Celulares',
    mark: false,
    iconDown: true,
  },
  {
    name: 'Hogar',
    mark: false,
    iconDown: true,
  },
  {
    name: 'Plan Móvil',
    mark: false,
    iconDown: true
  },
  {
    name: 'Entretenimiento',
    mark: false,
    iconDown: true
  },
  {
    name: 'Atención al cliente',
    mark: false,
    iconDown: false
  },
  {
    name: 'ofertas',
    mark: true,
    iconDown: false
  }
]

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, BreadCrumbComponent, MenuComponent, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class HeaderBarComponent {
  allMenuItems = menuItems;
}
