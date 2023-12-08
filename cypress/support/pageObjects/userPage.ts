import { general, loginSignupPage, mainPage } from "../selectors";

export class User {
  Logout() {
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
  DeleteAccount() {
    cy.findSelectorTextAndClick(mainPage.nav, " Delete Account");
    cy.findSelectorAndAssert(
      general.accoutDeleted,
      "contain.text",
      "Account Deleted"
    );
    cy.findAndClick(general.continueButton);
  }
}

export const user = new User();
