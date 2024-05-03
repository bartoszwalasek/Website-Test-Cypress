import { MainPage } from "../../support/pageObjects/main.page";
import { ProductPage } from "../../support/pageObjects/product.page";
import { ProductsPage } from "../../support/pageObjects/products.page";

describe("Products test cases", () => {
  let mainPage: MainPage;
  let productsPage: ProductsPage;

  beforeEach("Go to Products Page", () => {
    mainPage = new MainPage();
    productsPage = new ProductsPage();

    mainPage.goToAndCheckTitle();
    mainPage.mainMenu.goToProductsPage();
  });

  it("Verify All Products list", () => {
    //Assert
    productsPage.verifyProductsList();
  });

  it("Open and verify product detail page", () => {
    //Arrange
    const testedProduct = "Sleeveless Dress";

    //Act
    productsPage.getProductId(testedProduct).then((productId) => {
      productsPage.goToProductDetails(testedProduct);

      //Assert
      const productPage = new ProductPage(productId);
      productPage.verifyProductDetails(testedProduct);
    });
  });

  it("Search products over 'Search Product'", () => {
    //Arrange
    const searchedProduct = "Jeans";

    //Act
    productsPage.searchProducts(searchedProduct);

    //Assert
    productsPage.verifyProductsList(searchedProduct);
  });
});
