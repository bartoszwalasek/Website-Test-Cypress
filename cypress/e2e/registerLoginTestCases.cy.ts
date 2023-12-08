import {
  mainPage,
  loginSignupPage,
  signup,
  general,
} from "../support/selectors";
import testUser from "../fixtures/testUser.json";
import { navigateTo } from "../support/pageObjects/navigationPage";
import { register } from "../support/pageObjects/registerUserPage";

describe("Register and login test cases", () => {
  beforeEach("Open the Website and go to the Signup/Login section", () => {
    cy.openUrlAndCheckTitle("/", "Automation Exercise");
    navigateTo.SignupLoginPage();
  });

  it("Register a new User", () => {
    register.ProvideCorrectData(testUser.name, testUser.email);
    register.SubmitForm(
      testUser.gender,
      testUser.name,
      testUser.email,
      testUser.password,
      testUser.dateOfBirth.day,
      testUser.dateOfBirth.month,
      testUser.dateOfBirth.year,
      testUser.firstName,
      testUser.lastName,
      testUser.address,
      testUser.country,
      testUser.state,
      testUser.city,
      testUser.zipcode,
      testUser.mobileNumber
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

  it("Register User with existing email", () => {
    register.ProvideIncorrectData(testUser.name, testUser.email)
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
