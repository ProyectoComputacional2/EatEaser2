
import { Component, DoCheck, Input, NgModule, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  ngOnInit(): void {
    
  }
  constructor(private servicio:CargarScriptsService){

  }
  menuActivado (dataentrance:any){
    this.servicio.menu_activado.emit({data:dataentrance});
    }
  }
