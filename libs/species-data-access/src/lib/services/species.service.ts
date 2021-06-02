import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SpeciesService {
  constructor(private _http: HttpClient) {}
  url = 'http://localhost:3333';
  getAllSpecies(): Observable<any> {
    return this._http.get(`${this.url}/api/species`);
  }
}
