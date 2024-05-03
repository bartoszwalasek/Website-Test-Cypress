export class CartModal {
  header = ".modal-header";
  body = ".modal-body";
  footer = ".modal-footer";

  continueShopping() {
    cy.findSelectorTextAndClick(this.footer, "Continue Shopping");
  }

  viewCart() {
    cy.findSelectorTextAndClick(this.body, "View Cart");
  }
}
