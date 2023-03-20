import { EventEmitter, NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Output() menu_activado:EventEmitter<boolean>= new EventEmitter<boolean>();

menuActivado (){
  this.menu_activado.emit(true)
  
  console.log('Se ha seleccionado el menu')
}
 }
