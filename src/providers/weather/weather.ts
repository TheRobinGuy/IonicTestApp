//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
// http://api.wunderground.com/api/d8563d5509ce1bfa/conditions/q/FL/Maimi.json
  apiKey = "d8563d5509ce1bfa"; //API Key for wunderground.com
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.wunderground.com/api/"+this.apiKey+"/conditions/q";
  }

  getWeather(city, state){
    return this.http.get(this.url+"/"+state+"/"+city+".json")
    .map(res => res.json());
  }

}
