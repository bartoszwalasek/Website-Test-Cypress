import { loginSignupPage, mainPage } from "../selectors";

export class NavigationPage {
  HomePage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Home");
  }
  ProductsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Products");
  }
  CartPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Cart");
  }
  SignupLoginPage() {
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
  TestCasesPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Test Cases");
  }
  APITestingPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " API Testing");
  }
  VideoTutorialsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Video Tutorials");
  }
  ContactUsPage() {
    cy.findSelectorTextAndClick(mainPage.nav, " Contact us");
  }
}

export const navigateTo = new NavigationPage();
