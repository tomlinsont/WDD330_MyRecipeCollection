import { getParam, loadHeaderFooter } from "./utils.mjs";
import recipeList from "./recipeList.mjs";

loadHeaderFooter();

const category = getParam("category");
console.log(category);
recipeList(".recipe-list", category);
