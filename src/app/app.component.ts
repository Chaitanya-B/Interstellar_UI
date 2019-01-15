import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit() {
   this.navigationService.getPlanets();
  }
}
