// src/app/components/recipe-detail/recipe-detail.component.ts
import { Component, Input } from '@angular/core';
@Component({ selector: 'app-recipe-detail', templateUrl: './recipe-detail.component.html' })
export class RecipeDetailComponent { @Input() recipe: any; }
