import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Add',
      url: '/add-cd',
      icon: 'add'
    }];

  constructor() {}

}
