import { Recipe } from "./recipe.model";


export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'
        ),
        new Recipe(
          'Another Test Recipe',
          'This is simply another test',
          'https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg'
        )
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}