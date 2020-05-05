import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pie test', 'describing the test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('me test', 'can i see my face', 'https://www.linkedin.com/in/alexander-skarlatov-8b4199105/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BzyNbR10KTZuWhd5ptjG13w%3D%3D')
  ];
//https://www.linkedin.com/in/alexander-skarlatov-8b4199105/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BzyNbR10KTZuWhd5ptjG13w%3D%3D

  constructor() { }


  ngOnInit() {
  }

}
