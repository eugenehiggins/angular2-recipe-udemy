import {NgModule} from '@angular/core';
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {recipesRouting} from "./recipes.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        recipesRouting
    ],
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ]
})
export class RecipesModule {
}
