import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiMapaComponent } from './mi-mapa/mi-mapa.component';
import { MiQuienesomosComponent } from './mi-quienesomos/mi-quienesomos.component';
import { MiRegistroComponent } from './mi-registro/mi-registro.component';
import { MiGaleriaComponent } from './mi-galeria/mi-galeria.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MiMapaComponent,
    MiQuienesomosComponent,
    MiRegistroComponent,
    MiGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
