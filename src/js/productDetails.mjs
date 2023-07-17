import { findProductByLabel } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productLabel) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductByLabel(productLabel);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  setLocalStorage("recipe-cart", product);
}
function renderProductDetails() {
  document.querySelector("#recipeName").innerText = product.label;
  document.querySelector("#recipeDietLabel").innerText = product.dietLabels;
  document.querySelector("#recipeYield").innerText = product.yield;
  document.querySelector("#recipeImage").src = product.image;
  document.querySelector("#recipeImage").alt = product.label;

  const str = readLines();

  document.querySelector("#recipeIngredients").innerText = str;

}

function readLines() {
  var ingredList = JSON.stringify(product.ingredientLines);
  console.log(ingredList);

  const list = JSON.parse(ingredList);

  let newList = "";
  console.log(list.length);
  for (let i = 0; i < list.length; i++) {
    newList += list[i] + "\n";
    console.log(list[i]);
  }

  return newList;
}

