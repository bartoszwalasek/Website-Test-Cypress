import { cart } from "../selectors";

export class CartPage {
  verifyCartDetails(productName: string, quantity: string) {
    cy.get(cart.content).each((tableRow) => {
      cy.get(cart.unitPrice)
        .invoke("text")
        .then((text) => {
          const unitPrice: string = text.slice(4);

          const totalPrice: string = (
            parseInt(unitPrice) * parseInt(quantity)
          ).toString();

          cy.wrap(tableRow)
            .find(cart.description)
            .should("contain.text", productName);
          cy.wrap(tableRow)
            .find(cart.totalPrice)
            .should("contain.text", totalPrice);
        });
    });
  }
  clearCart() {
    cy.get(cart.content).each((tableRow) => {
      cy.wrap(tableRow);
      cy.findAndClick(cart.deleteButton);
      cy.findSelectorAndAssert(
        cart.emptyCart,
        "contain.text",
        "Cart is empty!"
      );
    });
  }
}

export const cartPage = new CartPage();
