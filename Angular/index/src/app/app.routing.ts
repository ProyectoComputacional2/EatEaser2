import { RouterModule } from "@angular/router";

import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { ProductoComponent } from "./producto/producto.component";

const appRoutes = [
    {path: 'path_registro', component: RegistroComponent},
    {path: 'path_login', component: LoginComponent},
    {path: 'path_producto', component: ProductoComponent}
];


export const routing = RouterModule.forRoot(appRoutes);