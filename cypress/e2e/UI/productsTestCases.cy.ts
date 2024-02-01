import { navigateTo } from "../../support/pageObjects/navigationPage";
import { productPage } from "../../support/pageObjects/productPage";
import { productsPage } from "../../support/pageObjects/productsPage";

describe("Products test cases", () => {
  beforeEach("Go to Products Page", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.productsPage();
  });

  it("Verify All Products and open product detail page", () => {
    productsPage.verifyProductsList();
    productsPage.goToProductDetails("Fancy Green Top");
    productPage.verifyProductDetails("Fancy Green Top");
  });

  it("Search products over 'Search Product'", () => {
    productsPage.searchProducts("Jeans");
  });
});
