import Storage from "./Storage.js";
const addNewProductsBTN = document.querySelector("#add-new-products");
const searchInput = document.querySelector("#search-input");

class ProductView {
  constructor() {
    addNewProductsBTN.addEventListener("click", (e) => this.addNewProduct(e));
    searchInput.addEventListener("input", (e) => this.searchProducts(e));
    this.products = [];
  }

  setApp() {
    this.products = Storage.getAllProduct();
  }

  addNewProduct(e) {
    e.preventDefault();
    const title = document.getElementById("product-title").value;
    const quantity = document.getElementById("product-quantity").value;
    const category = document.getElementById("product-category").value;
    if (!title || !quantity || !category) return;
    Storage.saveProducts({ title, quantity, category });
    this.products = Storage.getAllProduct();
    this.createProductList(this.products);
  }
  createProductList(products) {
    const productsDOM = document.getElementById("products-list");
    let result = "";
    products.forEach((item) => {
      const selectedCategory = Storage.getAllCategoryies().find(
        (c) => c.id == item.category
      );
      result += `
        <div class="flex items-center justify-between max-w-screen-sm">
          <span class="text-slate-400">${item.title}</span>
             <div class="flex items-center gap-x-3">
                <span class="text-slate-400 ml-72">${new Date().toLocaleDateString(
                  "fa-IR"
                )}</span>
                 <span
                   class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl"
                   >${selectedCategory.title}</span
                 >
                 <span
                 class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-400"
                 >${item.quantity}</span
                 >
               <button
                class="border px-2 py-0.5 rounded-xl border-red-500 text-red-400"
                data-id=${item.id}
               >
                  delete
               </button>
          </div>
         <div class="h-20"></div>
        </div>
        `;
    });
    productsDOM.innerHTML = result;
  }
  searchProducts(e) {
    const value = e.target.value.trim().toLowerCase();
    const filterdProducts = this.products.filter((p) => {
      p.title.toLowerCase().includes(value);
    });
    this.createProductList(filterdProducts);
  }
}
export default new ProductView();
