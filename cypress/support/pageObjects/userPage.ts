import { general, loginSignupPage, mainPage } from "../selectors";

export class UserPage {
  logout() {
    cy.findSelectorTextAndClick(mainPage.nav, " Logout");
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
  deleteAccount() {
    cy.findSelectorTextAndClick(mainPage.nav, " Delete Account");
    cy.findSelectorAndAssert(
      general.accoutDeleted,
      "contain.text",
      "Account Deleted"
    );
    cy.findAndClick(general.continueButton);
  }
}

export const user = new UserPage();
