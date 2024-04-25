export class MainMenuComponent {
  nav = ".shop-menu > .nav";

  constructor() {}

  goToHomePage() {
    cy.findSelectorTextAndClick(this.nav, " Home");
  }
  goToProductsPage() {
    cy.findSelectorTextAndClick(this.nav, " Products");
  }
  goToCartPage() {
    cy.findSelectorTextAndClick(this.nav, " Cart");
  }
  goToSignupLoginPage() {
    cy.findSelectorTextAndClick(this.nav, " Signup / Login");
  }
  goToTestCasesPage() {
    cy.findSelectorTextAndClick(this.nav, " Test Cases");
  }
  goToApiTestingPage() {
    cy.findSelectorTextAndClick(this.nav, " API Testing");
  }
  goToVideoTutorialsPage() {
    cy.findSelectorTextAndClick(this.nav, " Video Tutorials");
  }
  goToContactUsPage() {
    cy.findSelectorTextAndClick(this.nav, " Contact us");
  }
}
