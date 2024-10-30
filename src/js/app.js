import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp();
  ProductView.setApp();
  console.log(CategoryView);
  CategoryView.createdCategoryList();
  ProductView.createProductList(ProductView.products);
});
