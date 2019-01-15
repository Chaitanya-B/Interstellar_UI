import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public homeLbl : string = 'Home';
public viewInterStellarData: string = 'InterStellar Data';

  constructor() { }

  ngOnInit() {
  }

}
