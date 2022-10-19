import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Input() defaultTextImg: string = '';

  @Output() loaded = new EventEmitter<string>();

  defaultImg: string = 'https://180dc.org/wp-content/uploads/2016/08/default-profile.png';
  // defaultTextImg: string = 'Inserte una imagen';
  errorImg: boolean = false;
  imageLoaded: boolean = false;

  constructor() {
    // El constructor solo corre una vez
    // before render
    // No se pueden correr cosas de manera asyncrona
  }

  // Triggers
  ngOnChanges(): void {
    // before and during render
    // changes inputs -- time
      console.log('Parent image: ' + this.img);
      if (this.img == '') {
        this.defaultTextImg = 'Carga una imagen';
      }

  }

  ngOnInit(): void {
    // before render
    // async - fetch - once time
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
  }

  ngOnDestroy(): void {
    // delete component
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
