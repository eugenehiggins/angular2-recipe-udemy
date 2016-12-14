///<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>
import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import  'rxjs/Rx';

@Injectable()
export class RecipeService {

    recipesChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe("chili", "NM green chili", "http://www.specialtyproduce.com/sppics/9991.png", [
            new Ingredient('chilis', 2),
            new Ingredient('beans', 1)
        ]),
        new Recipe("beans", "it's just beans!", "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/new-england-baked-beans.jpg", [
            new Ingredient('pinto beans', 3),
            new Ingredient('farts', 9)
        ]),
    ];

    constructor( private http: Http) {
    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe (recipe: Recipe) {
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData(){
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.put('https://recipebook-6135b.firebaseio.com/recipes.json', body, {headers: headers});
    }

    fetchData(){

        return this.http.get('https://recipebook-6135b.firebaseio.com/recipes.json')
            .map((response: Response) => response.json())
            .subscribe(
                (data: Recipe[]) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            );
    }
}
