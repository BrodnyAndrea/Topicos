import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    // canActivate: [ClientPermissionsGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./Contact/Contact.module').then(m => m.ContactPageModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./Product/Product.module').then(m => m.ProductPageModule),
      }
      ,
      {
        path: 'service',
        loadChildren: () => import('./Service/Service.module').then(m => m.ServicePageModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
