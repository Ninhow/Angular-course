import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg'),
    new Recipe('A test recipe', 'this is simply a test', 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
