import { Component } from '@angular/core';
import {heroes} from "../heroes";


@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent {
  heroes = heroes;
}
