import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient) { }


  search(keyword = "adele"){
    return this.http.get(`${environment.lastFMApiUrl}?method=artist.gettopalbums&artist=${keyword}&api_key=${environment.lastFMApiKey}&format=json`);
  }
}
