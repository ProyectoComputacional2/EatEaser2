import { AfterViewInit, Component,ElementRef,EventEmitter,Input, Output, ViewChild } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { MenuComponent } from "src/app/componentes/menu/menu.component";






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  implements AfterViewInit{
  @ViewChild('menu-fondo')myId!: ElementRef;
  @Output() sidenav = new EventEmitter();
 child!:MenuComponent
  constructor(){
  
  }
  ngAfterViewInit() {
 
    
  }
  mostrar():void{
    if (this.child.box != null) {
      this.child.box.style.visibility = 'visible';
    console.log('visibles');
    
    }
    else{
      console.log('invisibles');
      console.log(this.child.perro);
      console.log(this.child.box);
    }
  }
  ngOnInit(): void {
    

    }
 
}
