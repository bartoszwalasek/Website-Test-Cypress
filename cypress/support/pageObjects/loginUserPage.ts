import { loginSignupPage, mainPage } from "../selectors";

export class LoginUser {
  provideCorrectData(email: string, password: string, name: string) {
    cy.findAndTypeWithoutAssert(loginSignupPage.loginEmail, email);
    cy.findAndTypeWithoutAssert(loginSignupPage.loginPassword, password);
    cy.findAndClick(loginSignupPage.loginButton);
    cy.findSelectorAndAssert(
      mainPage.nav,
      "contain.text",
      `Logged in as ${name}`
    );
  }
  provideIncorrectData(email: string, password: string) {
    cy.findAndTypeWithoutAssert(loginSignupPage.loginEmail, email);
    cy.findAndTypeWithoutAssert(loginSignupPage.loginPassword, password, {
      log: false,
    });
    cy.findAndClick(loginSignupPage.loginButton);
    cy.findSelectorAndAssert(
      loginSignupPage.form,
      "contain.text",
      `Your email or password is incorrect!`
    );
  }
}

export const login = new LoginUser();
