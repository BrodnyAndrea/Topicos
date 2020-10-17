import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';

import {ProductComponent} from './product.component';
import {ProductPageRoutingModule} from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductPageRoutingModule,
    LayoutModule,
  ],
  declarations: [ProductComponent,],
  exports: []
})
export class ProductPageModule {}
