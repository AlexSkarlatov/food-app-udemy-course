import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe_book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe_book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping_list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipe_book/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
