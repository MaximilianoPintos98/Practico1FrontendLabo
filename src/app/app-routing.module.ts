import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'inicio'},
  {path: 'inicio', component: InicioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'buscador', component: BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
