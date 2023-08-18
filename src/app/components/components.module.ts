import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    PokemonComponent
  ]
})
export class ComponentsModule { }
