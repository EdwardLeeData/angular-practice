import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Celery', 2),
        new Ingredient('Carrots', 5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}