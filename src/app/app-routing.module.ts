import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [{
  path: "inicio",
  component: InicioComponent
},
{
  path: "pokemon",
  component: PokemonComponent
},
{
  path: '**',
  redirectTo: 'inicio'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
