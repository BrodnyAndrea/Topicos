import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {ServiceComponent} from './service.component';
import {ServicePageRoutingModule} from './service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicePageRoutingModule,
    LayoutModule,
  ],
  declarations: [ServiceComponent,],
  exports: []
})
export class ServicePageModule {}
