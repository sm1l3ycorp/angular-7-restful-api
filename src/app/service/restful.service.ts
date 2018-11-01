import { Seasons } from './seasons';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(private http: HttpClient) { }

  public getSeasons(): Observable<Seasons[]> {

    const url = 'http://localhost:3000/rickAndMorty';

    return this.http.get<Seasons[]>(url);

  }

}
