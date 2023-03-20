import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})
export class MenuDesplegableComponent implements OnInit {
  @Input()
  menu!:boolean;
  
  constructor(private servicio:CargarScriptsService){
    
  }
  ngOnInit(): void {
    this.servicio.menu_activado.subscribe(data=>{
      this.menuAparece('visible')
    })
  }

 menuAparece(estilo:string){
  const mnu=document.getElementById('menu-fondo')
    if (mnu!=null ) {
      console.log('el menu no esta null')
   
        console.log('el menu esta visible')
        mnu.style.visibility=estilo;
      
     
     
    }
    else{
      console.log('el menu esta null')
    }
 }
  
}
