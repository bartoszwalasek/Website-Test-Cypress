import { productName } from "../support/data";
import { navigateTo } from "../support/pageObjects/navigationPage";
import { productPage } from "../support/pageObjects/productPage";
import { productsPage } from "../support/pageObjects/productsPage";

describe("Products test cases", () => {
  beforeEach("Go to Products Page", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.productsPage();
  });

  it("Verify All Products and open product detail page", () => {
    productsPage.verifyProductsList();
    productsPage.goToProductDetails(productName);
    productPage.verifyProductDetails(productName);
  });

  it("Search products over 'Search Product'", () => {
    productsPage.searchProducts("Jeans");
  });
});
