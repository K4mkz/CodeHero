import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private readonly timestamp = '1';
  private readonly apiKey = '412e02aa0d94b23e8a8e77d927a0bb7c';
  private readonly md5 = 'ee47f9a85e25d6962878f0568323a075';

  private readonly auth = `?ts=${this.timestamp}&apikey=${this.apiKey}&hash=${this.md5}`;
  private readonly API = `https://gateway.marvel.com/v1/public/characters`;

  constructor(private http: HttpClient) {}

  getMarvel(page: number) {
    return this.http.get<any>(
      `${this.API + this.auth}&limit=10&offset=${page}`
    );
  }

  getMarvelByName(page: number, name: string) {
    return this.http.get<any>(
      `${this.API + this.auth}&nameStartsWith=${name}&limit=10&offset=${page}`
    );
  }

  getMarvelById(id: number) {
    return this.http.get<any>(`${this.API}/${id + this.auth}`);
  }
}
