import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("chili","NM green chili", "http://www.specialtyproduce.com/sppics/9991.png")

  constructor() { }

  ngOnInit() {
  }

}
