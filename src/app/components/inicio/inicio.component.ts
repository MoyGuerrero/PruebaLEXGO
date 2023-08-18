import { Component, OnInit } from '@angular/core';
import { Info, Move } from 'src/app/interfaces/information.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pokemon: Pokemon[] = [];
  information: string = '';
  url: string = '';
  seleccionado: string = '';
  name: string = '';
  imagen: string = '';
  base: number = 0;
  ocultar: boolean = true;
  move: Move[] = [];

  constructor(private pruebaServices: PruebaService) { }
  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons() {
    this.pruebaServices.getObtenerPokemons().subscribe({
      next: pokemon => {
        this.pokemon = pokemon.results;
        // console.log(this.pokemon);
      },
      error: error => console.error(error)
    });
  }

  buscarHabilidades() {
    this.url = this.seleccionado
    this.pruebaServices.getHabilidades(this.seleccionado).subscribe({
      next: resultado => {
        this.ocultar = false;
        this.name = resultado.name
        this.imagen = resultado.sprites.back_default;
        this.base = resultado.base_experience;
        this.move = resultado.moves.slice(0, 4)
        console.log(this.move);

      },
      error: err => console.error(err)

    });
  }
}
