// src/app/components/recipe-list/recipe-list.component.ts
import { Component, Input } from '@angular/core';
@Component({ selector: 'app-recipe-list', templateUrl: './recipe-list.component.html' })
export class RecipeListComponent { @Input() recipes: any[] = []; }
