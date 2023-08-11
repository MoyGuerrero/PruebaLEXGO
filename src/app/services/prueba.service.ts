import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, Pokemons } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }



  getObtenerPokemons() {
    return this.http.get<Pokemons>('https://pokeapi.co/api/v2/pokemon')
  }
}
