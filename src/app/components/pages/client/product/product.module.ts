import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';

import {ProductComponent} from './product.component';
import {ProductPageRoutingModule} from './product-routing.module';
import {NzCardModule, NzDividerModule, NzGridModule} from 'ng-zorro-antd';
import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPipe} from '../../../../pipes/filter.pipe';
import {VerdurasService} from '../../../../services/verduras.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductPageRoutingModule,
    LayoutModule,
    NzDividerModule,
    NzGridModule,
    NzCardModule,
    NgxPaginationModule,

  ],
  declarations: [ProductComponent,FilterPipe],
  exports: [],
  providers: [VerdurasService]

})
export class ProductPageModule {}
