import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pokemon: Pokemon[] = [];

  constructor(private pruebaServices: PruebaService) { }
  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons() {
    this.pruebaServices.getObtenerPokemons().subscribe({
      next: pokemon => {
        this.pokemon = pokemon.results;
        console.log(this.pokemon);

      },
      error: error => console.error(error)

    });
  }



}
