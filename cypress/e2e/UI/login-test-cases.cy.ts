import testLoginUser from "../../fixtures/testLoginUser.json";
import { User } from "../../support/models/users.model";
import { LoginPage } from "../../support/pageObjects/login.page";
import { MainPage } from "../../support/pageObjects/main.page";

describe("Login user test cases", () => {
  const mainPage = new MainPage();
  const loginPage = new LoginPage();

  const loginUser = testLoginUser;

  beforeEach("Open the Website and go to the Signup/Login section", () => {
    mainPage.goToAndCheckTitle();
    mainPage.mainMenu.goToSignupLoginPage();
  });

  it("Login User with the correct email and password", () => {
    //Act
    loginPage.login(loginUser.email, loginUser.password);

    //Assert
    cy.findSelectorAndAssert(
      mainPage.mainMenu.nav,
      "contain.text",
      `Logged in as ${loginUser.name}`
    );
  });

  it("Login User with the incorrect email", () => {
    //Arrange
    const incorrectEmail = `incorrect_${loginUser.email}`;
    const expectedErrorText = "Your email or password is incorrect!";

    //Act
    loginPage.login(incorrectEmail, loginUser.password);

    //Assert
    cy.findSelectorAndAssert(
      loginPage.loginError,
      "contain.text",
      expectedErrorText
    );
  });
});
