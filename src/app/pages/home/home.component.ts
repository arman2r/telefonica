import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { PlansComponent } from "../../components/plans/plans.component";
import { BannerWithOptionsComponent } from 'src/app/components/banner-with-options/banner-with-options.component';
import { InfoBannerComponent } from 'src/app/components/info-banner/info-banner.component';
import { CommonModule } from '@angular/common';
import { OpinionsComponent } from 'src/app/components/opinions/opinions.component';

const bannerInfo = [
  {
    'title': 'Agrega servicios de streaming a tu plan de fibra óptica',
    'subtitle': 'Por contar con el plan hogar Movistar tendrás acceso a Disney + y Star + con precios especiales. Contrata tu plan favorito con streaming adicional',
    'description':'',
    'link': true,
    'image': '/assets/images/enjoy-image.png',
    'bg': false
  },
  {
    'title': 'Amplia tu señal de Wifi en toda tu casa con nuestro repetidor Wifi plus',
    'subtitle': 'Instala un Repetidor Wifi Plus en un punto de baja cobertura y amplifica tu señal Wifi en todo tu hogar. ',
    'description':'Adquiérelo con tu plan o solicita uno a través de la App Mi Movistar',
    'link': false,
    'image': '/assets/images/aeroband-image.png',
    'bg': true
  }
]

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [CommonModule, BannerComponent, PlansComponent, BannerWithOptionsComponent, InfoBannerComponent, OpinionsComponent]
})
export class HomeComponent {
  infoBnner = bannerInfo
}
