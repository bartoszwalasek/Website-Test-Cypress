import { loginSignupPage, mainPage, products } from "../selectors";

export class NavigationPage {
  homePage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Home");
  }
  productsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Products");
    cy.findSelectorAndAssert(
      products.allProductsHeader,
      "contain.text",
      "All Products"
    );
  }
  cartPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Cart");
  }
  signupLoginPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Signup / Login");
    cy.findSelectorAndAssert(
      loginSignupPage.form,
      "contain.text",
      "New User Signup!"
    );
    cy.findSelectorAndAssert(
      loginSignupPage.form,
      "contain.text",
      "Login to your account"
    );
  }
  testCasesPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Test Cases");
  }
  apiTestingPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " API Testing");
  }
  videoTutorialsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Video Tutorials");
  }
  contactUsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Contact us");
  }
}

export const navigateTo = new NavigationPage();
