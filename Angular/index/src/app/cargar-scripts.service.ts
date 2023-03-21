import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }


  @Output() menu_activado:EventEmitter<any>= new EventEmitter<any>();



}
