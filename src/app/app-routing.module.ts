
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';              
// Habrá que importar el componente que será servido para cada ruta
import { MiMapaComponent } from './mi-mapa/mi-mapa.component'
import { MiGaleriaComponent } from './mi-galeria/mi-galeria.component'
import { MiRegistroComponent } from './mi-registro/mi-registro.component'
import { MiQuienesomosComponent } from './mi-quienesomos/mi-quienesomos.component'

const routes: Routes = [
  // {
  //   path: '', // ruta raíz
  //   component: MiMapaComponent
  // },
  {
    path: 'buscar-comida', // ruta raíz
    component: MiMapaComponent
  },
  {
    path: 'galeria', // se accesa /otra-ruta
    component: MiGaleriaComponent
  },
  {
    path: 'registro', // se accesa /otra-ruta
    component: MiRegistroComponent
  },
  {
    path: 'quienes-somos', // se accesa /otra-ruta
    component: MiQuienesomosComponent
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}