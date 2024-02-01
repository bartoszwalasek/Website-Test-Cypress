import { products, product, general, modal } from "../selectors";

export class ProductsPage {
  verifyProductsList(productName: string = undefined) {
    cy.get(products.productInfo).each((product) => {
      cy.wrap(product)
        .find(general.image)
        .should("have.attr", "src")
        .and("include", "/get_product_picture/");
      if (productName != undefined) {
        cy.wrap(product).should("contain.text", productName);
      }
    });
  }
  goToProductDetails(productName: string) {
    cy.contains(products.productWrapper, productName)
      .contains(products.viewProduct)
      .click();
    cy.findSelectorAndAssert(
      product.productInformation,
      "contain.text",
      productName
    );
  }
  searchProducts(productName: string) {
    cy.findAndTypeWithoutAssert(products.searchProductInput, productName);
    cy.findAndClick(products.searchProductButton);
    cy.findSelectorAndAssert(
      products.productsHeader,
      "contain.text",
      "Searched Products"
    );
    this.verifyProductsList(productName);
  }
  addProductsToCart(productsToCart: string[]) {
    productsToCart.forEach((productName) => {
      cy.contains(products.productOverlay, productName)
        .contains(products.addToCart)
        .click({ force: true });
      if (cy.get(".modal-content")) {
        cy.findSelectorTextAndClick(modal.footer, "Continue Shopping");
      }
    });
  }
}

export const productsPage = new ProductsPage();
