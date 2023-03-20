<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, DoCheck, Input, NgModule, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
>>>>>>> Stashed changes
const box=document.getElementById('menu-fondo')
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
  /*@ViewChild(MenuDesplegableComponent) hijo=new  MenuDesplegableComponent;


  
 func($event:any){
  
  console.log("cuando entra")
    if($event==true){
      console.log('menu es verdadero')
this.hijo.menuAparece();
    }
    else{
      console.log('menu es falso')
    }
 }*/
  
 
}
