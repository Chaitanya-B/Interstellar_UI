import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private httpClient: HttpClient) {
   
   }

   getPlanets()  :any {
    console.log(environment);
   	return this.httpClient.get(environment.planets);
   }

   getRoutes() : any {
   	return this.httpClient.get(environment.routes);
   }

   getShortestRoute(source, destination, traffic) : any {
   	return this.httpClient.post(environment.shortestRoute,{
    'source': source,
    'destination': destination,
     'traffic' : traffic
    });
   }

   getPossibleRoutes(source, destination, traffic) : any {
   	return this.httpClient.post(environment.possibleRoutes,{
    'source': source,
    'destination': destination,
     'traffic' : traffic
    });
   }
}
