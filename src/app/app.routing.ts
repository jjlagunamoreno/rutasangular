import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { TablaMultiplicarRoutingComponent } from "./components/tabla-multiplicar-routing/tabla-multiplicar-routing.component"

//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR
//PARA LA NAVEGACIÓN DE RUTAS
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERÁ DEL TIPO Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "numerodoble/:numero", component: NumerodobleComponent },
    { path: "tabla/:numero", component: TablaMultiplicarRoutingComponent },
    { path: "**", component: NotfoundComponent }//el último siempre será en notfound
]

//DESDE ESTA CLASE DEBEMOS EXPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
//LAS RUTAS EN SI MISMAS
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
