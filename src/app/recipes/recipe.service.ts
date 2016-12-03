import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("chili","NM green chili", "http://www.specialtyproduce.com/sppics/9991.png",[
      new Ingredient('chilis', 2),
      new Ingredient('beans', 1)
    ]),
    new Recipe("beans","it's just beans!", "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/new-england-baked-beans.jpg",[
      new Ingredient('pinto beans', 3),
      new Ingredient('farts', 9)
    ]),
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
