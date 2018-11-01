import { Seasons } from './service/seasons';
import { Component } from '@angular/core';
import { RestfulService } from './service/restful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-RESTful-API';
  seasons = new Array<Seasons>();

  constructor( seaService: RestfulService ) {

    seaService.getSeasons().subscribe(response => {
      this.seasons = response.map(item => {
        return new Seasons(
          item.season,
          item.episode,
          item.title
        );
      });
    });
  }
}
