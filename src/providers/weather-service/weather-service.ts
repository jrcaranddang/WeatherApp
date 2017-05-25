import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherServiceProvider {
    private appId = '361c63784c396a68';
    private baseUrl = 'https://api.wunderground.com/api/';
    private searchUrl = '/autocomplete/';
    public city: any;
    public state: any;

    constructor(public http: Http,
                private geolocation: Geolocation) {
        console.log('Hello WeatherServiceProvider Provider');
    }

   search(query) {
     let Obs = Observable.create(observer => {
      
       query = query.split(' ').join('%20')
      
       let url = this.searchUrl
       url += "aq?query=" + query
       console.log(url)
     
       this.http.get(url)
         .subscribe(
           data => {
             observer.next(data.json());
           },
           err => observer.error(err),
           () => observer.complete()
         )
       
     })
     return Obs
   }

  searchWeather(lat, lng) {
    let Obs = Observable.create(observer => {
          
          let url = this.baseUrl + this.appId;
          url += '/geolookup/q/';
          url += `${lat},${lng}.json`;
          
          this.http.get(url)
            .subscribe(
              data => {
                observer.next(data.json());
              },
              err => observer.error(err),
              () => observer.complete()
            )
            
        })
    return Obs
  }

  local() {
    let Obs = Observable.create(observer => {
      this.geolocation.getCurrentPosition()
        .then((resp) => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;
          
          let url = this.baseUrl + this.appId;
          url += '/geolookup/q/';
          url += `${lat},${lng}.json`;
          
          this.http.get(url)
            .subscribe(
              data => {
                observer.next(data.json());
              },
              err => observer.error(err),
              () => observer.complete()
            )
            
        }).catch((error) => {
            console.log('Error getting location', error);
});
    })
    return Obs
  }
  
  getForecast(city, state) {
    
    let Obs = Observable.create(observer => {
      
      let url = this.baseUrl + this.appId;
      url += '/forecast/q/';
      url += `${state}/${city}.json`;
      console.log(url);
      this.http.get(url)
        .subscribe(
          data => {
            observer.next(data.json());
          },
          err => observer.error(err),
          () => observer.complete()
        )
    })
    return Obs
  }

}
