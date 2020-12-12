import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url);
  }
}
