import { getParam, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

loadHeaderFooter();

const productLabel = getParam("recipe");
productDetails(productLabel);
