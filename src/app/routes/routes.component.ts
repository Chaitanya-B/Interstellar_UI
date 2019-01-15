import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
public routes = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  this.navigationService.getRoutes().subscribe(
  (routesData)=> {
   this.routes = routesData.interGalaxialRoutes;
  })
  }

}
