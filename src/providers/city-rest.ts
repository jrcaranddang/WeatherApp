import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CityRest {
  // private baseUrl = "http://localhost:3000/api/" //windows local machine
  private baseUrl = "http://weatherapp-c9-dcarandangssf.c9users.io:8080/api/" //c9 linux/ubuntu
  private path = "Cities/"

  constructor(public http: Http) {
    console.log('Hello CityRest Provider');
  }

  save(card, token) {
    console.log("saved card: ", card)
    return this.http.post(
      this.baseUrl + this.path +
        '?access_token=' + token,
      card
    );
  }
  
  getList(userId, token) {
    console.log("getting list")
    return this.http.get(
      this.baseUrl + this.path +
        '?filter[where][userId]=' + userId +
        '&access_token=' + token
    )
  }

  removeCard(cardId, token) {
    console.log("removed card from favorites")
    return this.http.delete(
      this.baseUrl + this.path +
        cardId + '?access_token=' + token
        )
  }
}
