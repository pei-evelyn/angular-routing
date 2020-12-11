import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.log('Heroes Fetched!');
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id: number): Observable<Hero> {
    const idUrl = this.url + id;
    this.log(`Hero found! id ${id}`);
    return this.http.get<Hero>(idUrl);
  }

  private log(message:string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
