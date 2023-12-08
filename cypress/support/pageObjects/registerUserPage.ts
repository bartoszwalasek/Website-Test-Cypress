import { general, loginSignupPage, mainPage, signup } from "../selectors";

export class RegisterUser {
  provideCorrectData(name: string, email: string) {
    cy.findAndTypeWithoutAssert(loginSignupPage.signupName, name);
    cy.findAndTypeWithoutAssert(loginSignupPage.signupEmail, email);
    cy.findAndClick(loginSignupPage.signupButton);
    cy.findSelectorAndAssert(
      signup.mainForm,
      "contain.text",
      "Enter Account Information"
    );
    cy.findSelectorAndAssert(
      signup.mainForm,
      "contain.text",
      "Address Information"
    );
  }
  provideIncorrectData(name: string, email: string) {
    cy.findAndTypeWithoutAssert(loginSignupPage.signupName, name);
    cy.findAndTypeWithoutAssert(loginSignupPage.signupEmail, email);
    cy.findAndClick(loginSignupPage.signupButton);
    cy.findSelectorAndAssert(
      loginSignupPage.form,
      "contain.text",
      `Email Address already exist!`
    );
  }
  submitForm(
    gender: string,
    name: string,
    email: string,
    password: string,
    dayOfbirth: string,
    monthOfBirth: string,
    yearOfBirth: string,
    firstName: string,
    lastName: string,
    address: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string
  ) {
    cy.findAndCheck(`[value=${gender}]`);
    cy.findSelectorAndAssert(general.userName, "have.value", name);
    cy.findSelectorAndAssert(general.userName, "have.attr", "required");
    cy.findSelectorAndAssert(general.userEmail, "have.value", email);
    cy.findSelectorAndAssert(general.userEmail, "have.attr", "required");
    cy.findSelectorAndAssert(general.userEmail, "be.disabled", true);
    cy.findTypeAndAssertAttribute(signup.password, password, "required", {
      log: false,
    });
    cy.findSelectAndAssertValue(signup.dateOfBirth.day, `${dayOfbirth}`, "15");
    cy.findSelectAndAssertValue(
      signup.dateOfBirth.month,
      `${monthOfBirth}`,
      "3"
    );
    cy.findSelectAndAssertValue(signup.dateOfBirth.year, yearOfBirth, "1980");
    cy.findAndCheck(signup.newsletter);
    cy.findAndCheck(signup.offers);
    cy.findTypeAndAssertAttribute(signup.firstName, firstName, "required");
    cy.findTypeAndAssertAttribute(signup.lastName, lastName, "required");
    cy.findSelectorAndAssert(signup.company, "not.have.attr", "required");
    cy.findTypeAndAssertAttribute(signup.address, address, "required");
    cy.findSelectorAndAssert(signup.address2, "not.have.attr", "required");
    cy.findSelectAndAssertValue(signup.country, country, "Canada");
    cy.findTypeAndAssertAttribute(signup.state, state, "required");
    cy.findTypeAndAssertAttribute(signup.city, city, "required");
    cy.findTypeAndAssertAttribute(signup.zipcode, zipcode, "required");
    cy.findTypeAndAssertAttribute(
      signup.mobileNumber,
      mobileNumber,
      "required"
    );
    cy.findAndClick(signup.createAccountButton);
    cy.findSelectorAndAssert(
      general.accoutCreated,
      "contain.text",
      "Account Created"
    );
    cy.findAndClick(general.continueButton);
    cy.findSelectorAndAssert(
      mainPage.nav,
      "contain.text",
      `Logged in as ${name}`
    );
  }
}

export const register = new RegisterUser();
