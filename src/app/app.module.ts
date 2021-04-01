import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    DetalleComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
