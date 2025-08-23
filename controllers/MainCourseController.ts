import {recipes, categories, ingredients, recipeIngredients, recipeComments, recipeInstructions,} from '../src/data/data';
import { Controller } from "../libs/Controller";

export class MainCourseController extends Controller {
    public browseMainCourses() {
    const success = this.request.query.success;
    const MainCourses = recipes.filter(recipes => recipes.categoryId === 2);

    this.response.render("pages/MainCourses.ejs", {
        MainCourses, 
    });
}

    public readMainCourses(){
        const requestedId = this.request.params.id
    const MainCourses = recipes.find((recipe) => {
      return recipe.id == parseInt(requestedId) && recipe.categoryId === 2;
    });
    if (!MainCourses) {
      this.response.send(`La recette demandée n'existe pas`);
      return;
    }
    const comments = recipeComments.filter((comment) => {
          return comment.recipeId == MainCourses.id;
    });


const MainCoursesIngredients = recipeIngredients.filter(ri => ri.recipeId === MainCourses.id);
    const ingredientsWithDetails = MainCoursesIngredients.map(ri => {
    const ingredient = ingredients.find(i => i.id === ri.ingredientId);
    return {
        id: ri.id,
        quantity: ri.quantity,
        unit: ri.unit,
        ingredientId: ri.ingredientId,
        recipeId: ri.recipeId,
        name: ingredient?.name || 'Ingrédient inconnu'
      };
    });
    console.log(MainCoursesIngredients)

const stepInstructions = recipeInstructions
  .filter(re => re.recipeId === MainCourses.id)
  .sort((a, b) => a.step - b.step);

  const stepComment = recipeComments
  .filter(rc => rc.recipeId === MainCourses.id)
  .sort((a, b) => a.id - b.id);



    this.response.render("pages/recipe.ejs", {
      recipe: MainCourses,
      MainCoursesIngredients,
      ingredientsWithDetails,
      stepInstructions,
      stepComment
    });



    }}
