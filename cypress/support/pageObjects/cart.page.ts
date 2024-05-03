import { cartData } from "../models/cart.model";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
  url = "/view_cart";
  title = "Automation Exercise - Checkout";

  cartContent = ".cart_info tbody tr";
  unitPrice = ".cart_price p";
  description = ".cart_description";
  totalPrice = ".cart_total";
  deleteButton = ".cart_delete a";
  emptyCart = "#empty_cart";

  constructor() {
    super();
  }

  verifyCartDetails(dataToVerify: cartData[]) {
    cy.get(this.cartContent).should("have.length", dataToVerify.length);
    dataToVerify.forEach((data) => {
      cy.contains(this.cartContent, data.productName).then((tableRow) => {
        cy.wrap(tableRow)
          .find(this.description)
          .should("contain.text", data.productName);

        cy.wrap(tableRow)
          .find(this.unitPrice)
          .invoke("text")
          .then((text) => {
            const unitPrice: string = text.slice(4);

            const totalPrice: string = (
              parseInt(unitPrice) * parseInt(data.quantity)
            ).toString();

            cy.wrap(tableRow)
              .find(this.totalPrice)
              .should("contain.text", totalPrice);
          });
      });
    });
  }
  clearCart() {
    cy.get(this.cartContent).each((tableRow) => {
      cy.wrap(tableRow).find(this.deleteButton).click();
    });
    cy.findSelectorAndAssert(this.emptyCart, "contain.text", "Cart is empty!");
  }
}
