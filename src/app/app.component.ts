import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg
  // title = 'my-store';
  // parentImg: string = '';
  // defaultText: string = 'Carga una imagen';

  onLoad(img: string){
    console.log('Log padre: ' + img);
  }
}
