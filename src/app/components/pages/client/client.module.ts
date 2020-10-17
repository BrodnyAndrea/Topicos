import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ClientComponent} from './client.component';
import {ClientPageRoutingModule} from './client-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule, NzIconModule} from 'ng-zorro-antd';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    NzIconModule,
  ],
  declarations: [ClientComponent],
  exports: []
})
export class ClientPageModule {}
