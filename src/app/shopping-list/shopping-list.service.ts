import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Celery', 2),
        new Ingredient('Carrots', 5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}