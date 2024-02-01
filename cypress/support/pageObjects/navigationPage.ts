import {
  contact,
  general,
  loginSignupPage,
  mainPage,
  products,
} from "../selectors";

export class NavigationPage {
  homePage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Home");
  }
  productsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Products");
    cy.findSelectorAndAssert(
      products.productsHeader,
      "contain.text",
      "All Products"
    );
  }
  cartPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Cart");
    cy.findSelectorAndAssert(
      general.breadcrumb,
      "contain.text",
      "Shopping Cart"
    );
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
    cy.findSelectorAndAssert(contact.header, "contain.text", "Contact Us");
  }
}

export const navigateTo = new NavigationPage();
