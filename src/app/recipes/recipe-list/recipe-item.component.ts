import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './recipe-item.component.html',
    styles: [
        '.img-thumbnail{ max-width: 120px;}'
    ]
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() recipeId: number;


}
