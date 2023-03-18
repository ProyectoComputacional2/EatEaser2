import { Component } from '@angular/core';

const box = document.getElementById('menu-fondo');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    
    box = document.getElementById('menu-fondo');
     perro='pollo'
activarMenu(){
console.log('Hola')
  box!.style.visibility='visible'
 
}
constructor(){

}
}
