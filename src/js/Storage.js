const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

export default class Storage {
  // add new category
  //save category
  //get All category

  // category
  static getAllCategoryies() {
    //products an dcategory --> save on localStorage
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    //sort => des:
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }

  static saveCategory(categoryToSave) {
    // edit or new
    const sevedCategories = Storage.getAllCategoryies();

    const existedItem = sevedCategories.find((c) => c.id === categoryToSave.id);

    if (existedItem) {
      // Edit:
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      sevedCategories.push(categoryToSave);
    }

    localStorage.setItem("category", JSON.stringify(sevedCategories));
  }

  // product
  static getAllProduct() {
    const savedproducts = JSON.parse(localStorage.getItem("products")) || [];
    const sortedProducts = savedproducts.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedProducts;
  }

  static saveProducts(ProductToSave) {
    const sevedProducts = Storage.getAllProduct();
    const existedItem = sevedProducts.find((p) => p.id === ProductToSave.id);
    if (existedItem) {
      // Edit:
      existedItem.title = ProductToSave.id;
      existedItem.quantity = ProductToSave.quantity;
      existedItem.category = ProductToSave.category;
    } else {
      ProductToSave.id = new Date().getTime();
      ProductToSave.createdAt = new Date().toISOString();
      sevedProducts.push(ProductToSave);
    }
    localStorage.setItem("products", JSON.stringify(sevedProducts));
    console.log(3);
  }
}
