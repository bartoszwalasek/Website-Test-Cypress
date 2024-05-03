import { createMaleUser } from "../../support/factories/user.factory";
import { LoginPage } from "../../support/pageObjects/login.page";
import { SignupPage } from "../../support/pageObjects/signup.page";
import { AccountCreatedPage } from "../../support/pageObjects/account-created.page";
import { MainPage } from "../../support/pageObjects/main.page";

describe("Register user test cases", () => {
  const loginPage = new LoginPage();
  const registerUser = createMaleUser();

  beforeEach("Open the Website and go to the Signup/Login section", () => {
    const mainPage = new MainPage();

    mainPage.goToAndCheckTitle();
    mainPage.mainMenu.goToSignupLoginPage();
  });

  it("Register a new User", () => {
    //Arrange
    const registerPage = new SignupPage();
    const accountCreatedPage = new AccountCreatedPage();

    const expectedSuccessText = "Account Created";

    //Act
    loginPage.signup(registerUser.name, registerUser.email);
    registerPage.submitForm(registerUser);

    //Assert
    cy.findSelectorAndAssert(
      accountCreatedPage.accountCreatedText,
      "contain.text",
      expectedSuccessText
    );
  });

  it("Register User with existing email", () => {
    //Arrange
    const expectedErrorText = "Email Address already exist!";

    //Act
    loginPage.signup(registerUser.name, registerUser.email);

    //Assert
    cy.findSelectorAndAssert(
      loginPage.signupError,
      "contain.text",
      expectedErrorText
    );
  });
});
