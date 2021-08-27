import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Player []> {
    return this.httpClient.get<Player []>('http://localhost:3001/players');
  }
  // @ts-ignore
  save(player): Observable<Player> {
    return this.httpClient.post('http://localhost:3001/players',player)
  }
  // @ts-ignore
  edit(id: number, player: Player): Observable<Player> {
    return this.httpClient.put('http://localhost:3001/players/' +id, player)
  }
  findById(id: number): Observable<Player> {
    return this.httpClient.get('http://localhost:3001/players/' + id);
  }
  delete(id: number): Observable<Player>{
    return this.httpClient.delete('http://localhost:3001/players/' + id);
  }
}
