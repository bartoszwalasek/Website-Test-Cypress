import testUser from "../../fixtures/testLoginUser.json";
import { CartPage } from "../../support/pageObjects/cart.page";
import { LoginPage } from "../../support/pageObjects/login.page";
import { ProductPage } from "../../support/pageObjects/product.page";
import { ProductsPage } from "../../support/pageObjects/products.page";

describe("Cart test cases", () => {
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach("Login a user", () => {
    const loginPage = new LoginPage();
    const loginUser = testUser;

    loginPage.goToAndCheckTitle();
    loginPage.login(loginUser.email, loginUser.password);
    productsPage.goToAndCheckTitle();
  });

  afterEach("Clear cart", () => {
    cartPage.clearCart();
  });

  it("Go to product details and add to the cart", () => {
    //Arrange
    const productName = "Pure Cotton Neon Green Tshirt";
    const productQuantity = "3";

    //Act
    productsPage.getProductId(productName).then((productId) => {
      productsPage.goToProductDetails(productName);

      const productPage = new ProductPage(productId);
      productPage.addProductToCart(productQuantity);

      //Assert
      cartPage.verifyCartDetails([
        { productName: productName, quantity: productQuantity },
      ]);
    });
  });

  it("Add products to the cart from products page", () => {
    //Arrange
    const firstProduct = "Rose Pink Embroidered Maxi Dress";
    const secondProduct = "Pure Cotton V-Neck T-Shirt";
    const thirdProduct = "Frozen Tops For Kids";
    const productQuantity = "1";

    //Act
    productsPage.addProductsToCart([firstProduct, secondProduct, thirdProduct]);
    productsPage.mainMenu.goToCartPage();

    //Assert
    cartPage.verifyCartDetails([
      { productName: firstProduct, quantity: productQuantity },
      { productName: secondProduct, quantity: productQuantity },
      { productName: thirdProduct, quantity: productQuantity },
    ]);
  });
});
