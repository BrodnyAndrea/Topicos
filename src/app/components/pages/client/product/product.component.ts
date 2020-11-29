
import { Component, OnInit } from '@angular/core';
import {VerdurasService} from '../../../../services/verduras.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(servicioVerduras:VerdurasService) {

    this.verduras=servicioVerduras.listarVerduras();

  }
  p:number = 1;
  filtro:any;
  verduras: any[];

  ngOnInit() {
  }

}
