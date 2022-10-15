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
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
