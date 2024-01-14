import { cartPage } from "../../support/pageObjects/cartPage";
import { login } from "../../support/pageObjects/loginUserPage";
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
    cartPage.verifyCartDetails("Pure Cotton Neon Green Tshirt", "3")
    cartPage.clearCart()
  });
});
