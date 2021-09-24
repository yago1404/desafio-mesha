import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) {
  }

  getPlaylist(type: string): Observable<any> {
    return this.http.get('https://shazam.p.rapidapi.com/search?term=' + type + '&limit=5', {headers: {'x-rapidapi-key': '36c14660admsh8986d9683be409dp16df11jsn89d9b584ce38'}});
  }
}
