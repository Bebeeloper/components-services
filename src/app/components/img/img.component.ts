import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Input() defaultTextImg: string = '';

  @Output() loaded = new EventEmitter<string>();

  defaultImg: string = 'https://180dc.org/wp-content/uploads/2016/08/default-profile.png';
  // defaultTextImg: string = 'Inserte una imagen';
  errorImg: boolean = false;
  imageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  imageError(){
    this.errorImg = true;
    if (this.errorImg) {
      console.log('Hay un error: ' + this.errorImg);
      this.img = this.defaultImg;
    }
  }

  imgLoaded(){
    this.imageLoaded = true;
    if (this.imageLoaded && this.errorImg) {
      this.defaultTextImg = 'Error al cargar la imagen';
      console.log('Imagen cargada: ' + this.imageLoaded);
      this.errorImg = false;
    }else if (this.imageLoaded && this.errorImg == false) {
      this.defaultTextImg = 'Imagen cargada exitosamente';
      this.loaded.emit(this.img);
      console.log('Imagen cargada: ' + this.imageLoaded);
      console.log('Hay un error: ' + this.errorImg);
    }
  }

}
