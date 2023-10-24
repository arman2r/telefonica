import { Component, HostListener } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BannerComponent {
  bgImageVariable: any ='/assets/images/banner-desktop.png';
  ngOnInit() {
  }

  onResize(event: any){
    if(event.target.innerWidth >= 992) {
      this.bgImageVariable = '/assets/images/banner-desktop.png'
    } else {
      this.bgImageVariable = '/assets/images/banner-mobile.png'
    }
  }
}
