import Storage from "./Storage.js";

const Cattitle = document.querySelector("#category-title");
const Catdescription = document.querySelector("#category-description");
const addNewCategory = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCategory.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = Cattitle.value;
    const description = Catdescription.value;
    if (!title || !description) return;
    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategoryies();
    //update DOM:
    this.createdCategoryList();
  }

  setApp() {
    this.categories = Storage.getAllCategoryies();
  }

  createdCategoryList() {
    let result = `<option class="bg-slate-500 text-slate-300" value="">select a category</option>`;
    this.categories.forEach((element) => {
      result += `<option class="bg-slate-500 text-slate-300" value=${element.id}>${element.title}</option>`;
    });
    const categoryDOM = document.getElementById("product-category");
    categoryDOM.innerHTML = result;
  }
}

export default new CategoryView();
