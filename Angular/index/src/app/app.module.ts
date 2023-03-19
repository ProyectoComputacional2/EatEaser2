import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargarScriptsService } from './cargar-scripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    RegistroComponent,
    LoginComponent,
    ProductoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
