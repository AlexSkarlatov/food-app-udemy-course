import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10)

  ];
  onAddIng(ing: Ingredient){
    //add this param to the ingredients array
    this.ingredients.push(ing);
  }

  constructor() { }

  ngOnInit() {
  }

}
