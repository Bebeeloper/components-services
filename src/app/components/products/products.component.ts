import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [{
    id: '1',
    name: 'Carne de cerdo',
    image: 'https://okdiario.com/img/2022/03/26/la-carne-de-cerdo-es-roja-o-blanca-el-falso-mito-a-disipar.jpg',
    price: 8500
  },
  {
    id: '2',
    name: 'Carne de res',
    image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/05/cortes-de-carne.jpg',
    price: 12500
  },
  {
    id: '3',
    name: 'Pechuga de pollo',
    image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/01/pechuga-de-pollo-al-ajo-y-vino-blanco.jpg',
    price: 8500
  },
  {
    id: '4',
    name: 'Pavo',
    image: 'https://images.ecestaticos.com/DYFXWPOl3BX5BIoJNiNK1VzdOMo=/0x108:2121x1300/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe39%2F2c3%2F13b%2Fe392c313b7f0ef2e368fc2303ffd2843.jpg',
    price: 18000
  },
  {
    id: '1',
    name: 'Carne de cerdo',
    image: 'https://okdiario.com/img/2022/03/26/la-carne-de-cerdo-es-roja-o-blanca-el-falso-mito-a-disipar.jpg',
    price: 8500
  },
  {
    id: '2',
    name: 'Carne de res',
    image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/05/cortes-de-carne.jpg',
    price: 12500
  },
  {
    id: '3',
    name: 'Pechuga de pollo',
    image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/01/pechuga-de-pollo-al-ajo-y-vino-blanco.jpg',
    price: 8500
  },
  {
    id: '4',
    name: 'Pavo',
    image: 'https://images.ecestaticos.com/DYFXWPOl3BX5BIoJNiNK1VzdOMo=/0x108:2121x1300/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe39%2F2c3%2F13b%2Fe392c313b7f0ef2e368fc2303ffd2843.jpg',
    price: 18000
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
