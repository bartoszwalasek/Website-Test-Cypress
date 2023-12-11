import { products, product, general } from "../selectors";

export class ProductsPage {
  verifyProductsList() {
    cy.get(products.productWrapper).each((product) => {
      cy.wrap(product)
        .find(general.image)
        .should("have.attr", "src")
        .and("include", "/get_product_picture/");
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
}

export const productsPage = new ProductsPage();
