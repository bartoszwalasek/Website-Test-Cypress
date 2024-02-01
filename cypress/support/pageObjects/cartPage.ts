import { cart } from "../selectors";
import { cartData } from "../types";

export class CartPage {
  verifyCartDetails(dataToVerify: cartData[]) {
    dataToVerify.forEach((data) => {
      cy.contains(cart.content, data.productName).then((tableRow) => {
        cy.wrap(tableRow)
          .find(cart.description)
          .should("contain.text", data.productName);

        cy.wrap(tableRow)
          .find(cart.unitPrice)
          .invoke("text")
          .then((text) => {
            const unitPrice: string = text.slice(4);

            const totalPrice: string = (
              parseInt(unitPrice) * parseInt(data.quantity)
            ).toString();

            cy.wrap(tableRow)
              .find(cart.totalPrice)
              .should("contain.text", totalPrice);
          });
      });
    });
  }
  clearCart() {
    cy.get(cart.content).each((tableRow) => {
      cy.wrap(tableRow).find(cart.deleteButton).click();
    });
    cy.findSelectorAndAssert(cart.emptyCart, "contain.text", "Cart is empty!");
  }
}

export const cartPage = new CartPage();
