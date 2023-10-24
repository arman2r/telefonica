import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PlanComponent } from '../plan/plan.component';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

const plans = [
  {
    'namePlan': 'Internet Fibra',
    'planes': [
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': '',
        'promo': false,
        'promo2': true,
        'promo3': false,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      }
    ]
  },
  {
    'namePlan': 'Internet Fibra + TV',
    'planes': [
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': '',
        'promo': false,
        'promo2': true,
        'promo3': false,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      }
    ]
  },
  {
    'namePlan': 'Internet Fibra + Fijo',
    'planes': [
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },{
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': '',
        'promo': false,
        'promo2': true,
        'promo3': false,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      }
    ]
  },
  {
    'namePlan': 'Planes trío',
    'planes': [
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': 'BONO 1000 Mbps x 2 meses',
        'promo': true,
        'promo2': true,
        'promo3': true,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      },
      {
        'nameSubPlan': 'Solo internet fibra',
        'subtitle': 'Fibra Optica ⓘ',
        'serviceMbs': '100 Mbps',
        'price': '39.90',
        'quantityMounth': '2 meses',
        'beforePrice': '79.90',
        'installPrice': 'gratis',
        'requiredInstall': 'Previa evaluación crediticia',
        'apps': [
          {'name': 'whatsapp', 'image': '/assets/images/whatsApp-icon.png'},
          {'name': 'facebook', 'image': '/assets/images/facebook-icon.png'},
          {'name': 'messenger', 'image': '/assets/images/messenger-icon.png'},
          {'name': 'instagram', 'image': '/assets/images/instagram-icon.png'},
          {'name': 'waze', 'image': '/assets/images/waze-icon.png'},
          {'name': 'spotify', 'image': '/assets/images/spotify-icon.png'}
        ],
        'bono': '',
        'promo': false,
        'promo2': true,
        'promo3': false,
        'txtInfoEnd': 'Velocidad de internet Fibra Máx de descargar 100Mbps Máx de subida 100Mpbs'
      }
    ]
  }
]

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, PlanComponent, MatChipsModule, MatIconModule]
})
export class PlansComponent {
  allPlans = plans
  subPlanes = this.allPlans[0].planes

  setPlan(plan: any){
    console.log(plan)
    this.subPlanes = plan.planes
  }
}
