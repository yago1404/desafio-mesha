import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../../services/weather.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cityName: string;
  cityLat: number;
  cityLong: number;
  isValid = true;
  temp: number;
  isLoading = false;

  constructor(private weatherService: WeatherService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getWeather(): void {
    this.isLoading = true;
    this.validateForm();
    if (this.isValid) {
      if (this.cityName) {
        this.weatherService.getWeatherByCity(this.cityName).subscribe((response) => {
          this.temp = parseFloat(response.main.temp) - 273.15;
          this.isLoading = false;
          this.router.navigate(['/playlist/' + this.cityName + '/' + this.temp.toString()]);
        }, error => {
          alert('Algo deu errado\nVerifique se preencheu os campos corretamente');
          this.isLoading = false;
        });
      } else {
        this.weatherService.getWeatherByLocation(this.cityLat, this.cityLong).subscribe((response) => {
          console.log(response);
          this.temp = parseFloat(response.main.temp) - 273.15;
          this.cityName = response.name;
          this.isLoading = false;
          this.router.navigate(['/playlist/' + this.cityName + '/' + this.temp.toString()]);
        }, error => {
          alert('Algo deu errado\nVerifique se preencheu os campos corretamente');
          this.isLoading = false;
        });
      }
    }
  }

  validateForm(): void {
    if (!this.cityName) {
      if (!this.cityLong || !this.cityLat) {
        this.isValid = false;
        this.isLoading = false;
        return;
      }
    }
    this.isValid = true;
  }

}
