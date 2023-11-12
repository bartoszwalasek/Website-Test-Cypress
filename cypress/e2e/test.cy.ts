import {
  mainPage,
  loginSignupPage,
  signup,
  general,
} from "../support/selectors";
import testUser from "../fixtures/testUser.json";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
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
  });

  it("Register a new user", () => {
    cy.findAndTypeWithoutAssert(loginSignupPage.signupName, testUser.name);
    cy.findAndTypeWithoutAssert(loginSignupPage.signupEmail, testUser.email);
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
    cy.findAndCheck(`[value=${testUser.gender}]`);
    cy.findSelectorAndAssert(signup.name, "have.value", testUser.name);
    cy.findSelectorAndAssert(signup.name, "have.attr", "required");
    cy.findSelectorAndAssert(signup.email, "have.value", testUser.email);
    cy.findSelectorAndAssert(signup.email, "have.attr", "required");
    cy.findSelectorAndAssert(signup.email, "be.disabled", true);
    cy.findTypeAndAssertAttribute(
      signup.password,
      testUser.password,
      "required",
      { log: false }
    );
    cy.findSelectAndAssertValue(
      signup.dateOfBirth.day,
      `${testUser.dateOfBirth.day}`,
      "15"
    );
    cy.findSelectAndAssertValue(
      signup.dateOfBirth.month,
      `${testUser.dateOfBirth.month}`,
      "3"
    );
    cy.findSelectAndAssertValue(
      signup.dateOfBirth.year,
      testUser.dateOfBirth.year,
      "1980"
    );
    cy.findAndCheck(signup.newsletter);
    cy.findAndCheck(signup.offers);
    cy.findTypeAndAssertAttribute(
      signup.firstName,
      testUser.firstName,
      "required"
    );
    cy.findTypeAndAssertAttribute(
      signup.lastName,
      testUser.lastName,
      "required"
    );
    cy.findSelectorAndAssert(signup.company, "not.have.attr", "required");
    cy.findTypeAndAssertAttribute(signup.address, testUser.address, "required");
    cy.findSelectorAndAssert(signup.address2, "not.have.attr", "required");
    cy.findSelectAndAssertValue(signup.country, testUser.country, "Canada");
    cy.findTypeAndAssertAttribute(signup.state, testUser.state, "required");
    cy.findTypeAndAssertAttribute(signup.city, testUser.city, "required");
    cy.findTypeAndAssertAttribute(signup.zipcode, testUser.zipcode, "required");
    cy.findTypeAndAssertAttribute(
      signup.mobileNumber,
      testUser.mobileNumber,
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
      `Logged in as ${testUser.name}`
    );
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
  });

  it("Login User with the incorrect email and password", () => {
    cy.findAndTypeWithoutAssert(
      loginSignupPage.loginEmail,
      `${testUser.email}incorrect`
    );
    cy.findAndTypeWithoutAssert(
      loginSignupPage.loginPassword,
      `${testUser.password}_incorrect`,
      { log: false }
    );
    cy.findAndClick(loginSignupPage.loginButton);
    cy.findSelectorAndAssert(
      loginSignupPage.form,
      "contain.text",
      `Your email or password is incorrect!`
    );
  });

  it("Login User with the correct email and password", () => {
    cy.findAndTypeWithoutAssert(loginSignupPage.loginEmail, testUser.email);
    cy.findAndTypeWithoutAssert(
      loginSignupPage.loginPassword,
      testUser.password
    );
    cy.findAndClick(loginSignupPage.loginButton);
    cy.findSelectorAndAssert(
      mainPage.nav,
      "contain.text",
      `Logged in as ${testUser.name}`
    );
    cy.findSelectorTextAndClick(mainPage.nav, " Delete Account");
    cy.findSelectorAndAssert(
      general.accoutDeleted,
      "contain.text",
      "Account Deleted"
    );
    cy.findAndClick(general.continueButton);
  });
});
