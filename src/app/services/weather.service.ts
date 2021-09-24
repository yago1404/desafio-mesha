import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeatherByCity(cityName: string): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName.toUpperCase() + '&appid=a6592a4b7cb359a683dd69948408cd84');
  }

  getWeatherByLocation(cityLat: number, cityLong: number): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + cityLat + '&lon=' + cityLong + '&appid=a6592a4b7cb359a683dd69948408cd84');
  }
}
