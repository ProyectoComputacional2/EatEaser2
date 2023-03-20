import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargarScriptsService } from './cargar-scripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
=======
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component'
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    HeaderComponent,
    MenuComponent
=======
    MenuPrincipalComponent,
    RegistroComponent,
    LoginComponent,
    ProductoComponent,
    MenuDesplegableComponent
>>>>>>> Stashed changes
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
