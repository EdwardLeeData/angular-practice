import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html'
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe;

}
