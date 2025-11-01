// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class RecipeService { constructor(private http: HttpClient) {}
 getRecipes(q: string) { return this.http.get(`${environment.apiUrl}/search?q=${q}`); } }
