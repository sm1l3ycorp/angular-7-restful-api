import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(private http: HttpClient) { }

  public getPokemon(): Observable<Pokemon[]> {

    const url = 'http://localhost:3000/pokemon';

    return this.http.get<Pokemon[]>(url);

  }

}
