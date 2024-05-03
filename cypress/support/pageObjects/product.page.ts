import { CartModal } from "../modals/cart.modal";
import { BasePage } from "./base.page";

export class ProductPage extends BasePage {
  productId: string;

  productInformation = ".product-information";
  quantity = "#quantity";
  addToCartButton = "button.cart";

  cartModal = new CartModal();

  constructor(productId: string) {
    super();
    this.productId = productId;
    this.url = `/product_details/${this.productId}`;
  }

  verifyProductDetails(productName: string) {
    cy.get(this.productInformation)
      .should("contain.text", productName)
      .and("contain.text", "Category")
      .and("contain.text", "Availability")
      .and("contain.text", "Condition")
      .and("contain.text", "Brand");

    cy.get(`${this.productInformation} > span`).should("contain.text", "Rs.");
  }

  addProductToCart(quantity: string) {
    cy.findAndClear(this.quantity);
    cy.findAndTypeWithoutAssert(this.quantity, quantity);
    cy.findAndClick(this.addToCartButton);
    cy.findSelectorAndAssert(this.cartModal.header, "contain.text", "Added!");
    cy.findSelectorAndAssert(
      this.cartModal.body,
      "contain.text",
      "Your product has been added to cart."
    );
    this.cartModal.viewCart();
  }
}
