import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    InicioComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    PokemonComponent
  ]
})
export class ComponentsModule { }
