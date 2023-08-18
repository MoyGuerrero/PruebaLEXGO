import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, Pokemons } from '../interfaces/pokemon.interfaces';
import { environment } from 'src/environments/environment.development';
import { Info } from '../interfaces/information.interface';

const api = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }



  getObtenerPokemons() {
    return this.http.get<Pokemons>(api)
  }

  getHabilidades(pokemon: string) {
    return this.http.get<Info>(`${api}/${pokemon}/`)
  }
}
