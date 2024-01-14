import { modal, product } from "../selectors";

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

  addProductToCart(quantity: string) {
    cy.findAndClear(product.quantity);
    cy.findAndTypeWithoutAssert(product.quantity, quantity);
    cy.findAndClick(product.addToCartButton);
    cy.findSelectorAndAssert(modal.header, "contain.text", "Added!");
    cy.findSelectorAndAssert(
      modal.body,
      "contain.text",
      "Your product has been added to cart."
    );
    cy.findSelectorTextAndClick(modal.body, "View Cart");
  }
}

export const productPage = new ProductPage();
