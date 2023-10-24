import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class InfoBannerComponent {
  @Input() description: any;
}
