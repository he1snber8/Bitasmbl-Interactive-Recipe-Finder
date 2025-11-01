// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
const routes: Routes = [ { path: '', component: SearchComponent }, { path: 'recipe/:id', component: RecipeDetailComponent } ];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
