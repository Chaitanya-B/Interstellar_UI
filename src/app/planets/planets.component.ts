import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
public planets = [];

  constructor(private navigationService: NavigationService ) { }

  ngOnInit() {
  this.navigationService.getPlanets().subscribe(
  (planetsData)=> {
   this.planets = planetsData.interGalaxialPlanets;
  });
  }

}
