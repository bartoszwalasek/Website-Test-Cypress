import { productName } from "../support/data";
import { navigateTo } from "../support/pageObjects/navigationPage";
import { productPage } from "../support/pageObjects/productPage";
import { productsPage } from "../support/pageObjects/productsPage";

describe("Products test cases", () => {
  it("Verify All Products and open product detail page", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.productsPage();
    productsPage.verifyProductsList();
    productsPage.goToProductDetails(productName);
    productPage.verifyProductDetails(productName);
  });
});
