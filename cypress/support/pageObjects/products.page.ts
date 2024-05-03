import { CartModal } from "../modals/cart.modal";
import { BasePage } from "./base.page";

export class ProductsPage extends BasePage {
  url = "/products";

  productsHeader = ".features_items > .title";
  productInfo = ".productinfo";
  productImage = "img";
  productWrapper = ".product-image-wrapper";
  productId = "data-product-id";
  viewProductButton = "View Product";
  searchProductInput = "#search_product";
  searchProductButton = "#submit_search";
  productOverlay = ".product-overlay";
  addToCartButton = "Add to cart";

  cartModal = new CartModal();

  constructor() {
    super();
  }

  verifyProductsList(productName: string = undefined) {
    cy.get(this.productInfo).each((product) => {
      cy.wrap(product)
        .find(this.productImage)
        .should("have.attr", "src")
        .and("include", "/get_product_picture/");
      if (productName != undefined) {
        cy.wrap(product).should("contain.text", productName);
      }
    });
  }

  goToProductDetails(productName: string) {
    cy.contains(this.productWrapper, productName)
      .contains(this.viewProductButton)
      .click();
  }

  getProductId(productName: string): Cypress.Chainable<string> {
    return cy
      .contains(this.productInfo, productName)
      .contains(this.addToCartButton)
      .invoke("attr", this.productId);
  }

  searchProducts(productName: string) {
    cy.findAndTypeWithoutAssert(this.searchProductInput, productName);
    cy.findAndClick(this.searchProductButton);
    cy.findSelectorAndAssert(
      this.productsHeader,
      "contain.text",
      "Searched Products"
    );
  }

  addProductsToCart(productsToCart: string[]) {
    productsToCart.forEach((productName) => {
      cy.contains(this.productOverlay, productName)
        .contains(this.addToCartButton)
        .click({ force: true });
      if (cy.get(this.cartModal.body)) {
        this.cartModal.continueShopping();
      }
    });
  }
}
