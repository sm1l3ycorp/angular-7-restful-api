import { Pokemon } from './service/pokemon';
import { Component } from '@angular/core';
import { RestfulService } from './service/restful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-RESTful-API';
  pokemon = new Array<Pokemon>();

  constructor( pokedexService: RestfulService ) {

    pokedexService.getPokemon().subscribe(response => {
      this.pokemon = response.map(item => {
        return new Pokemon(
          item.id,
          item.num,
          item.name,
          item.type,
          item.height,
          item.weight,
          item.weaknesses
        );
      });
    });
  }
}
