# Bitasmbl-Interactive-Recipe-Finder

Build a responsive web application that allows users to search for recipes, filter by ingredients or dietary preferences, and view detailed recipe steps.

## Tech Stack
- Angular

## Requirements
- Implement dynamic rendering of components based on user input or API data
- Handle user input and events efficiently
- Make the application responsive and visually appealing
- Fetch and display data from an external source

## Installation
1. Ensure you have Node.js and npm installed. You can download them from https://nodejs.org/
2. Install the Angular CLI globally:
   bash
   npm install -g @angular/cli
   
3. Clone the repository:
   bash
   git clone https://github.com/<your-username>/Bitasmbl-Interactive-Recipe-Finder.git
   
4. Navigate to the project directory:
   bash
   cd Bitasmbl-Interactive-Recipe-Finder
   
5. Install dependencies:
   bash
   npm install
   
6. Configure environment variables:
   - Open `src/environments/environment.ts` and set the `apiBaseUrl` to your recipe API endpoint.

## Usage
1. Start the development server:
   bash
   ng serve
   
2. Open your browser and navigate to `http://localhost:4200`.
3. Use the search bar to find recipes by name.
4. Apply filters for ingredients or dietary preferences using the filter panel.
5. Click on a recipe to view detailed steps and ingredients.

## Implementation Steps
1. Initialize a new Angular project with Angular CLI.
2. Generate core components: `SearchComponent`, `FilterComponent`, `RecipeListComponent`, and `RecipeDetailComponent`.
3. Create a `RecipeService` to handle API calls to fetch recipe data.
4. Implement dynamic rendering in `AppComponent` to switch between list and detail views based on user interactions.
5. Bind user input events in `SearchComponent` and `FilterComponent` to trigger data fetches and UI updates.
6. Style components using Angular's built-in styling approach and ensure responsive layouts with CSS Flexbox or Grid.
7. Integrate environment variables for the API base URL in `environment.ts` and `environment.prod.ts`.
8. Test the application and optimize API calls to ensure efficient data loading.

## API Endpoints
- `GET /recipes?search={query}&ingredients={ingredients}&diet={diet}`: Search and filter recipes.
- `GET /recipes/{id}`: Fetch detailed information for a single recipe.