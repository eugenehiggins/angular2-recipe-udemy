import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
    '.img-thumbnail{ max-width: 120px;}'
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
