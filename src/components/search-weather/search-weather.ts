import { Component } from '@angular/core';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';

@Component({
  selector: 'search-weather',
  templateUrl: 'search-weather.html'
})
export class SearchWeatherComponent {
  public results: any;

  constructor(
    public weather: WeatherServiceProvider) {
    console.log('Hello SearchWeatherComponent Component');
  }

  onClear(search) {
    console.log("clear search")
    console.log(search)
    this.results = null;
  }

  searchLocation(cityName) {
    console.log(cityName)
    this.weather.search(cityName)
      .subscribe(
        data => {
          this.results = data.RESULTS;
          console.log(this.results)
        }
      )
  }
}
