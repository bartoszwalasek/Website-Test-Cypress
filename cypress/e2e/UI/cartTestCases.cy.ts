import { cartPage } from "../../support/pageObjects/cartPage";
import { login } from "../../support/pageObjects/loginUserPage";
import { navigateTo } from "../../support/pageObjects/navigationPage";
import { productPage } from "../../support/pageObjects/productPage";
import { productsPage } from "../../support/pageObjects/productsPage";

describe("Cart test cases", () => {
  before("Login a user", () => {
    cy.openUrlAndCheckTitle("/login", "Automation Exercise - Signup / Login");
    login.provideCorrectData(
      "testuser_2@example.com",
      "P@ssword1!",
      "Test User_2"
    );
  });
  it("Go to product details and add to the cart", () => {
    cy.openUrlAndCheckTitle("/products", "Automation Exercise - All Products");
    productsPage.goToProductDetails("Pure Cotton Neon Green Tshirt");
    productPage.addProductToCart("3");
    cartPage.verifyCartDetails([
      { productName: "Pure Cotton Neon Green Tshirt", quantity: "3" },
    ]);
    cartPage.clearCart();
  });
  it("Add products to the cart from products Page", () => {
    cy.openUrlAndCheckTitle("/products", "Automation Exercise - All Products");
    productsPage.addProductsToCart([
      "Rose Pink Embroidered Maxi Dress",
      "Pure Cotton V-Neck T-Shirt",
      "Frozen Tops For Kids",
    ]);
    navigateTo.cartPage();
    cartPage.verifyCartDetails([
      { productName: "Rose Pink Embroidered Maxi Dress", quantity: "1" },
      { productName: "Pure Cotton V-Neck T-Shirt", quantity: "1" },
      { productName: "Frozen Tops For Kids", quantity: "1" },
    ]);
    cartPage.clearCart();
  });
});
