import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService){};

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
