import { Component } from '@angular/core';


import {heroes} from "../heroes";
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroes = heroes;
}
