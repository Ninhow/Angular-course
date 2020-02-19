import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is simply a test', 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg', [new Ingredient('meat', 1), new Ingredient('bread', 2)]),
        new Recipe('Another recipe', 'this is simply a test', 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg', [new Ingredient('food1', 1), new Ingredient('food2', 2)])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }
    getRecipes(){
        //returnerar en kopia av recipes
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}