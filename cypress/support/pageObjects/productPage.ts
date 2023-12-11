import { product } from "../selectors";

export class ProductPage {
  verifyProductDetails(productName: string) {
    cy.get(product.productInformation)
      .should("contain.text", productName)
      .and("contain.text", "Category")
      .and("contain.text", "Availability")
      .and("contain.text", "Condition")
      .and("contain.text", "Brand");

    cy.get(`${product.productInformation} > span`).should(
      "contain.text",
      "Rs."
    );
  }
}

export const productPage = new ProductPage();
