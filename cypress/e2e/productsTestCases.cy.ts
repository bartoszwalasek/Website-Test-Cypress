import { navigateTo } from "../support/pageObjects/navigationPage";
import { productsPage } from "../support/pageObjects/productsPage";

describe("Products test cases", () => {
  it("Verify All Products and open product detail page", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.productsPage();
    productsPage.verifyProductsList();
    productsPage.goToProductDetails("Cotton Mull Embroidered Dress");
  });
});
