import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-space-canvas',
  templateUrl: './space-canvas.component.html',
  styleUrls: ['./space-canvas.component.scss']
})
export class SpaceCanvasComponent implements OnInit {
  public isSrcIdNotEntered : boolean = false;
  public isDestIdNotEntered : boolean = false;
  public shortestRoute;
  public possibleRoutes = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {

  }

  showShortestRoute(srcPlanetId, destPlanetId, traffic) {
   console.log('Params: ',srcPlanetId, destPlanetId, traffic);
   this.isSrcIdNotEntered = !srcPlanetId;
   this.isDestIdNotEntered = !destPlanetId;
   
    if(srcPlanetId && destPlanetId) {
       this.navigationService.getShortestRoute(srcPlanetId,destPlanetId,!!traffic).subscribe(
  		(shortestRoute)=> {
   			this.shortestRoute = shortestRoute;
  		    console.log('Shotest Route is :',this.shortestRoute);
  });
    }
  }

  showPossibleRoutes(srcPlanetId, destPlanetId, traffic) {
   console.log('Params: ',srcPlanetId, destPlanetId, traffic);
   this.isSrcIdNotEntered = !srcPlanetId;
   this.isDestIdNotEntered = !destPlanetId;
   
    if(srcPlanetId && destPlanetId) {
       this.navigationService.getPossibleRoutes(srcPlanetId,destPlanetId,!!traffic).subscribe(
  		(possibleRoutesData)=> {
   			this.possibleRoutes = possibleRoutesData.possibleRoutes;
  		    console.log('Shotest Route is :',this.possibleRoutes);
  });
    }
  }


 clearLatestResults() {
  this.shortestRoute = null;
  this.possibleRoutes = [];
 }
}
